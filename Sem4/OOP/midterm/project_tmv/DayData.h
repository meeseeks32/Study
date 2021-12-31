#pragma once
#include "TimestampPage.h"

class DayData
{
private:
    /* Container for different timestamps from the same day */
    std::map<std::string, TimestampPage> _dailyOrders;

public:
    DayData();
    void addTimestampPage(const std::string, const TimestampPage &);
    bool checkTimestampPage(const std::string);
    TimestampPage &getTimestampPage(const std::string);
    std::map<std::string, TimestampPage> &getDailyOrders();
    void printDayPage();
    std::set<std::string> getDayProducts();
    std::vector<std::string> getTimestamps();
};
