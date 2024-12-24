import React from 'react';
import { Drawer } from 'expo-router/drawer';

export default function _layout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{
          headerShown: false,
          drawerLabel: 'Beranda',
          title: 'Beranda',
        }}
      />
      <Drawer.Screen
        name="home/game"
        options={{
          headerShown: false,
          drawerLabel: 'Semua Game',
          title: 'Semua Game',
        }}
      />
      <Drawer.Screen
        name="home/transaksi"
        options={{
          headerShown: false,
          drawerLabel: 'Semua Transaksi',
          title: 'Semua Transaksi',
        }}
      />
      <Drawer.Screen
        name="home/methodepembayaran"
        options={{
          headerShown: false,
          drawerLabel: 'Semua Methode Pembayaran',
          title: 'Semua Methode pembayaran',
        }}
      />
      <Drawer.Screen
        name="home/riwayattransaksi"
        options={{
          headerShown: false,
          drawerLabel: 'Semua Riwayat Transaksi',
          title: 'Semua Riwayat Transaksi',
        }}
      />
  </Drawer>
  );
}
