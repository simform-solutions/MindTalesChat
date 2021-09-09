package com.mindtaleschat;

import androidx.annotation.NonNull;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ContactPackage implements ReactPackage {
    @NonNull
    @org.jetbrains.annotations.NotNull
    @Override
    public List<NativeModule> createNativeModules(@NonNull @org.jetbrains.annotations.NotNull ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();

        modules.add(new ContactModule(reactContext));
        return modules;
    }

    @NonNull
    @org.jetbrains.annotations.NotNull
    @Override
    public List<ViewManager> createViewManagers(@NonNull @org.jetbrains.annotations.NotNull ReactApplicationContext reactContext) {
        return Collections.emptyList();    }


    // Backward compatibility
    public List<Class<? extends JavaScriptModule>> createJSModules() {
        return new ArrayList<>();
    }
}
