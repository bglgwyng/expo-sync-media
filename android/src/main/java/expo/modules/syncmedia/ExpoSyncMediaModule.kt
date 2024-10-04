package expo.modules.syncmedia

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

// Import necessary classes
import android.content.ContentResolver
import android.provider.MediaStore
import android.database.Cursor
import android.util.Log

class ExpoSyncMediaModule : Module() {
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  override fun definition() = ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('ExpoSyncMedia')` in JavaScript.
    Name("ExpoSyncMedia")
  }
}
