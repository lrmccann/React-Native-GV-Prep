//
//  NativeCalendar.m
//  GrapeVineAI
//
//  Created by Logan Mccann on 3/16/21.
//

// RCTCalendarModule.m

#import "NativeCalendar.h"
#import <React/RCTLog.h>

@implementation NativeCalendar

RCT_EXPORT_MODULE(NativeCalendar);

RCT_EXPORT_METHOD(createCalendarEvent:(NSString *)name location:(NSString * )location)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

  RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(getName)
{
return [[UIDevice currentDevice] name];
}
@end
