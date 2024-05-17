import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, RefreshControl } from 'react-native';
import axios from 'axios';
import cheerio from 'cheerio';

const HomeScreen = () => {
  const [marketPrice, setMarketPrice] = useState('Loading...');
  const [refreshing, setRefreshing] = useState(false);
  const minutes=1;

  const getMarketPrice = async () => {
    try {
      const symbol = 'KSBBL';
      const url = `https://merolagani.com/CompanyDetail.aspx?symbol=${symbol}`;
      const response = await axios.get(url);
      
      const $ = cheerio.load(response.data);
      const marketPriceElement = $('#ctl00_ContentPlaceHolder1_CompanyDetail1_lblMarketPrice');
      const marketPrice = marketPriceElement.text().trim();
      
      setMarketPrice(marketPrice);
      console.log('Market price of KSBBL:', marketPrice);
    } catch (error) {
      console.error('Error fetching data:', error);
      setMarketPrice('N/A');
    }
  };

  useEffect(() => {
    getMarketPrice();

    const interval = setInterval(() => {
      getMarketPrice();
    }, minutes*60*1000);

    return () => clearInterval(interval);
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    getMarketPrice().then(() => setRefreshing(false));
  };

  return (
    <ScrollView
      contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <Text>KSBBL: {marketPrice}</Text>
    </ScrollView>
  );
};

export default HomeScreen;
