import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import VIForegroundService from '@voximplant/react-native-foreground-service';

const backgroundService = () => {
    useEffect(()=>{
        createChannel();
    },[]);

    const createChannel=async()=>{
        const channelConfig = {
            id: 'channelId',
            name: 'Channel name',
            description: 'Channel description',
            enableVibration: false
        };
    await VIForegroundService.getInstance().createNotificationChannel(channelConfig);
    }

    const startForegroundService=async()=> {
        const notificationConfig = {
            channelId: 'channelId',
            id: 3456,
            title: 'Title',
            text: 'Some text',
            icon: 'ic_icon',
            button: 'Some text',
        };
        try {
            await VIForegroundService.getInstance().startService(notificationConfig);
        } catch (e) {
            console.error(e);
        }
    }
    const stopForegroundService=async()=> {
        await VIForegroundService.getInstance().stopService();
    }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={()=>{startForegroundService()}}>
        <Text style={styles.buttonText}>Start Foreground</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button2} onPress={()=>{startForegroundService()}}>
        <Text style={styles.buttonText}>Stop Foreground</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Start Background</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button2}>
        <Text style={styles.buttonText}>Stop Background</Text>
      </TouchableOpacity>
    </View>
  );
};

export default backgroundService;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#f0f0f0',
  },
  button: {
    backgroundColor: '#25C120',
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
    marginVertical: 5,
    width: 180,
    alignSelf: 'center',
  },
  button2: {
    backgroundColor: '#ff1100',
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
    marginVertical: 5,
    width: 180,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});