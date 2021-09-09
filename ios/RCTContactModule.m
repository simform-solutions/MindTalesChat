//
//  RCTContactModule.m
//  MindTalesChat
//
//  Created by Juhi Parmar on 09/09/21.
//

#import <Foundation/Foundation.h>
#import "RCTContactModule.h"
#import <Contacts/CNContact.h>
#import <Contacts/CNContactStore.h>
#import <Contacts/CNContactFetchRequest.h>

@implementation RCTContactModule : NSObject

// To export a module named RCTContactModule
RCT_EXPORT_MODULE ();
RCT_EXPORT_METHOD(getContacts: (RCTResponseSenderBlock)cb)

{
  
  @try {

    NSMutableArray *data =  [self loadContactList];
        NSError * err;
    NSData * jsonData = [NSJSONSerialization  dataWithJSONObject:data options:0 error:&err];
    NSString * myString = [[NSString alloc] initWithData:jsonData   encoding:NSUTF8StringEncoding];
    cb(@[[NSNull null], myString]);
  }

  @catch ( NSException *e ) {
    cb(@[e, [NSNull null]]);

  }
}
-(NSMutableArray *)loadContactList {
  NSMutableArray *contactList = [NSMutableArray array];

    CNAuthorizationStatus status = [CNContactStore authorizationStatusForEntityType:CNEntityTypeContacts];
    if( status == CNAuthorizationStatusDenied || status == CNAuthorizationStatusRestricted)
    {
        NSLog(@"access denied");
    }
    else
    {
        //Create repository objects contacts
        CNContactStore *contactStore = [[CNContactStore alloc] init];
        //Select the contact you want to import the key attribute  ( https://developer.apple.com/library/watchos/documentation/Contacts/Reference/CNContact_Class/index.html#//apple_ref/doc/constant_group/Metadata_Keys )

        NSArray *keys = [[NSArray alloc]initWithObjects:CNContactIdentifierKey,CNContactFamilyNameKey,CNContactGivenNameKey, CNContactEmailAddressesKey, CNContactBirthdayKey, CNContactImageDataKey, CNContactPhoneNumbersKey,  nil];
        // Create a request object
        CNContactFetchRequest *request = [[CNContactFetchRequest alloc] initWithKeysToFetch:keys];
        request.predicate = nil;
        [contactStore enumerateContactsWithFetchRequest:request
                                                  error:nil
                                             usingBlock:^(CNContact* __nonnull contact, BOOL* __nonnull stop)
         {
             if(contact.givenName)
                       [contactList addObject: contact.givenName];

         }];
      

    }
  return contactList;
}
@end
