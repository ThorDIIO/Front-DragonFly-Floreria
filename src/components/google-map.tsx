import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { Input } from "@nextui-org/react";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBZgeNOur246vs8wMX2B8eDjwWHSFJ3lvk", 
  });

  const [markers, setMarkers] = useState([]);
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState("");
  const [geocodedLocation, setGeocodedLocation] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error obteniendo ubicación:", error);
        }
      );
    } else {
      console.log("La geolocalización no está disponible");
    }
  }, []);


  const handleMapClick = (event: any) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();

    setMarkers([{ lat, lng }]);
    reverseGeocode({ lat, lng });
  };


  const handleGeocode = () => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: address }, (results, status) => {
      if (status === "OK") {
        const location = results[0].geometry.location;
        setGeocodedLocation({
          lat: location.lat(),
          lng: location.lng(),
        });
        setMarkers([
          {
            lat: location.lat(),
            lng: location.lng(),
          },
        ]);
      } else {
        alert("No se pudo encontrar la ubicación: " + status);
      }
    });
  };


  const reverseGeocode = (location: { lat: number; lng: number }) => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ location }, (results, status) => {
      if (status === "OK" && results[0]) {
        setAddress(results[0].formatted_address);
      } else {
        alert("No se pudo obtener la dirección: " + status);
      }
    });
  };

  if (loadError) return <div>Error al cargar el mapa</div>;
  if (!isLoaded) return <div>Cargando...</div>;

  return (
    <div>
      <div>
        <Input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Escribe la dirección"
        />
        <button onClick={handleGeocode}>Buscar dirección</button>
      </div>

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={geocodedLocation || location || center}
        options={options}
        onClick={handleMapClick}
      >
        {markers.map((marker, index) => (
          <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} />
        ))}
      </GoogleMap>
    </div>
  );
};

export default Map;
