#pragma once
#include "TimestampPage.h"

class DayData
{
private:
    /* Container for different timestamps from the same day */
    std::map<std::string, TimestampPage> _dailyOrders;

public:
    DayData();
    void addTimestampPage(std::string, TimestampPage);
    void printDayPage();
};
