import React from 'react';
import { View, Text, Button, StatusBar, TouchableOpacity, StyleSheet, Image, ScrollView, TouchableNativeFeedback, Platform } from 'react-native';
import AndroidOpenSettings from 'react-native-android-open-settings'

import Utils from "../../utils/index"
import Config from "../../config/index"

import RNIap, { purchaseErrorListener, purchaseUpdatedListener, ProductPurchase, PurchaseError } from 'react-native-iap';

const itemSkus = Platform.select({
    android: [
        'com.keropoks.coins100'
    ],
    ios: [
        'com.keropoks.coins100'
    ],
});

const viewWidth = Config.Constant.SCREEN_WIDTH * (Utils.MethodUtils.isTablet() ? 0.65 : 0.85)

export default class Purchase extends React.Component {
    purchaseUpdateSubscription = null
    purchaseErrorSubscription = null

    componentDidMount() {
        this.purchaseUpdateSubscription = purchaseUpdatedListener((purchase= InAppPurchase | SubscriptionPurchase | ProductPurchase ) => {
          console.log('purchaseUpdatedListener', purchase);
          const receipt = purchase.transactionReceipt;
          if (receipt) {
            yourAPI.deliverOrDownloadFancyInAppPurchase(purchase.transactionReceipt)
            .then((deliveryResult) => {
              if (isSuccess(deliveryResult)) {
                // Tell the store that you have delivered what has been paid for.
                // Failure to do this will result in the purchase being refunded on Android and
                // the purchase event will reappear on every relaunch of the app until you succeed
                // in doing the below. It will also be impossible for the user to purchase consumables
                // again untill you do this.
                if (Platform.OS === 'ios') {
                  RNIap.finishTransactionIOS(purchase.transactionId);
                } else if (Platform.OS === 'android') {
                  // If consumable (can be purchased again)
                  RNIap.consumePurchaseAndroid(purchase.purchaseToken);
                  // If not consumable
                  RNIap.acknowledgePurchaseAndroid(purchase.purchaseToken);
                }
     
                // From react-native-iap@4.1.0 you can simplify above `method`. Try to wrap the statement with `try` and `catch` to also grab the `error` message.
                // If consumable (can be purchased again)
                RNIap.finishTransaction(purchase, true);
                // If not consumable
                RNIap.finishTransaction(purchase, false);
              } else {
                // Retry / conclude the purchase is fraudulent, etc...
              }
            });
          }
        });
     
        this.purchaseErrorSubscription = purchaseErrorListener((error= PurchaseError) => {
          console.warn('purchaseErrorListener', error);
        });
      }
     
      componentWillUnmount() {
        if (this.purchaseUpdateSubscription) {
          this.purchaseUpdateSubscription.remove();
          this.purchaseUpdateSubscription = null;
        }
        if (this.purchaseErrorSubscription) {
          this.purchaseErrorSubscription.remove();
          this.purchaseErrorSubscription = null;
        }
      }

    render() {
        return (
            <View style={styles.mainView}>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainView: {
        height: '100%',
        width: "100%",
        backgroundColor: Config.Constant.COLOR_BACKGROUND,
        //justifyContent: 'center',
        paddingHorizontal: '2%',
    },
})