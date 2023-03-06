//
//  CustomerService.h
//  StockManagement
//
//  Created by Guillaume Rager on 07/11/2017.
//  Copyright © 2017 CAST. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "CustomerData.h"

@interface CustomerService : NSObject

+ (instancetype)sharedInstance;
- (void) getAllCustomers;
- (void) getAllPurchasesForCustomer:(CustomerData*)aCustomerData;

@end
