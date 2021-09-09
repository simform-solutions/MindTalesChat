package com.mindtaleschat;

import android.Manifest;
import android.content.ContentResolver;
import android.content.pm.PackageManager;
import android.database.Cursor;
import android.provider.ContactsContract;
import android.util.Log;

import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;


import org.json.JSONArray;

import java.util.ArrayList;

public class ContactModule extends ReactContextBaseJavaModule {
    //constructor
    public ContactModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }
    //Mandatory function getName that specifies the module name
    @Override
    public String getName() {
        return "ContactModule";
    }
    //Custom function that we are going to export to JS

    @ReactMethod
    public void getContacts(Callback cb) {
        try{
            ArrayList<String> contacts =  getContactList();
            JSONArray mJSONArray = new JSONArray(contacts);
            cb.invoke(null, String.valueOf(mJSONArray));
        }catch (Exception e){
            cb.invoke(e.toString(), null);
        }
    }

    private ArrayList<String> getContactList() {
        ArrayList<String> arrayList = new ArrayList<>();

        if (ContextCompat.checkSelfPermission(getReactApplicationContext(), Manifest.permission.READ_CONTACTS) != PackageManager.PERMISSION_GRANTED) {
// requesting to the user for permission.
            ActivityCompat.requestPermissions(getReactApplicationContext().getCurrentActivity(), new String[]{Manifest.permission.READ_CONTACTS}, 100);
        } else {
//if app already has permission this block will execute.
        ContentResolver cr = getReactApplicationContext().getContentResolver();

        Cursor cur = cr.query(ContactsContract.Contacts.CONTENT_URI,
                null, null, null, null);
         if (cur.getCount() > 0) {
             if(cur.moveToNext()) {
                 String id = cur.getString(cur.getColumnIndex(ContactsContract.Contacts._ID));
                 String name = cur.getString(cur.getColumnIndex(ContactsContract.Contacts.DISPLAY_NAME));
                 if (Integer.parseInt(cur.getString(cur.getColumnIndex(ContactsContract.Contacts.HAS_PHONE_NUMBER))) > 0)
                 {

                     Cursor phones = cr.query(ContactsContract.CommonDataKinds.Phone.CONTENT_URI,null,ContactsContract.CommonDataKinds.Phone.CONTACT_ID +" = "+ id,null, null);
                     while (phones.moveToNext()) {
                         String phoneNumber = phones.getString(phones.getColumnIndex(ContactsContract.CommonDataKinds.Phone.NUMBER));
                         arrayList.add(phoneNumber);
                     }
                     phones.close();
                 }

             }
            }
            cur.close();
        }
        return arrayList;
       }
    }



