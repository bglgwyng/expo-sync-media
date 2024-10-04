import ExpoModulesCore
import Photos

public class ExpoSyncMediaModule: Module {
    // Each module class must implement the definition function. The definition consists of components
    // that describes the module's functionality and behavior.
    // See https://docs.expo.dev/modules/module-api for more details about available components.
    public func definition() -> ModuleDefinition {
        // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
        // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
        // The module will be accessible from `requireNativeModule('ExpoSyncMedia')` in JavaScript.
        Name("ExpoSyncMedia")
        
        AsyncFunction("fetchPersistentChanges") { (since: String?) in
            if #available(iOS 16, *) {
                let photoLibrary = PHPhotoLibrary.shared()
                let token: PHPersistentChangeToken
                
                if let sinceToken = since, let data = Data(base64Encoded: sinceToken),
                   let decodedToken = try? NSKeyedUnarchiver.unarchivedObject(ofClass: PHPersistentChangeToken.self, from: data) {
                    token = decodedToken
                } else {
                    token = photoLibrary.currentChangeToken
                }
                
                
                var insertedIds = []
                var deletedIds = []
                // var updateds = []
                
                for change in try photoLibrary.fetchPersistentChanges(since: token){
                    let changeDetails = try change.changeDetails(for: PHObjectType.asset)
                    
                    changeDetails.insertedLocalIdentifiers.forEach { insertedIds.append($0) }
                    changeDetails.deletedLocalIdentifiers.forEach { deletedIds.append($0) }
                    // changeDetails.updatedLocalIdentifiers.forEach {updateds.append($0)}
                }
                
                do {
                    let nextToken = try NSKeyedArchiver.archivedData(withRootObject: photoLibrary.currentChangeToken, requiringSecureCoding: true)
                    
                    return [
                        "nextToken": nextToken.base64EncodedString(),
                        "insertedIds": insertedIds,
                        "deletedIds": deletedIds
                    ]
                } catch {
                    throw NSError(domain: "ExpoSyncMediaModule", code: 2, userInfo: [NSLocalizedDescriptionKey: "Failed to serialize token: \(error.localizedDescription)"])
                }
            } else {
                throw NSError(domain: "ExpoSyncMediaModule", code: 1, userInfo: [NSLocalizedDescriptionKey: "This feature is only available on iOS 16 and later."])
            }
        }
    }
}
