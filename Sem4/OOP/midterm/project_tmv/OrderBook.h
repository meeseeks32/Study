#pragma once
#include "DayData.h"

class Orderbook
{
private:
    /* Container for different market day pages */
    std::map<std::string, DayData> _orderbook;

public:
    /** Orderbook constructor*/
    Orderbook(const std::string);

    /** Returns specific day page */
    DayData &getDayPage(const std::string);

    /** Prints whole orderbook */
    void printOrderbook();

    /** Get all products */
    std::set<std::string> getAllProducts();

    /** Get minimum price for specified product */
    double getMin(std::string, std::string, std::string, const OrderType &);

    /** Get maximum price for specified product */
    double getMax(std::string, std::string, std::string, const OrderType &);

    // /** Get average price for specified product */
    // double getAvg(std::string, std::string, std::string, const OrderType &);

    /** Get average price for specified product across several timestamps */
    double getAvg(std::string, const OrderType &, const unsigned int);

    /** Get all date-time information */
    std::map<std::string,
             std::vector<std::string>>
    getAllDatetime();

    /** Get number of time periods */
    unsigned int getTimestepsNum();

    /** Check that product argument exists in the book */
    bool checkProdArg(std::string);

    /** Check that ordertype argument is correct */
    bool checkOTPArg(OrderType);

    /** Check that timestamp argument is correct */
    bool checkTimestampArg(unsigned int);

    /** Check that order extrema argument is correct */
    bool checkExtremaArg(std::string);

    /** Get initial datetime */
    std::pair<std::string, std::string> getInitialDatetime();
};
