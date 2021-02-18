import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

import React from "react";
// import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import Card from "../components/HotelInfo/Card";
import Gallery from "../components/HotelInfo/Gallery";
import MapHotel from "../components/HotelInfo/MapHotel";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

