import React from 'react';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";


const libraries = ["places"];

const Search = ({ panTo }) => {

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 33.830296, lng: () => -116.545296 },
      radius: 200 * 1000,
    },
  });

  return (
    <div className="search">
      <Combobox
        onSelect={async (address) => {
            setValue(address, true);
            clearSuggestions();

            try {
                const result = await getGeocode({address});
                const { lat, lng } = await getLatLng(result[0]);
                panTo({lat, lng});
            } catch(error) {
                console.log("error!")
            }

        }}
      >
        <ComboboxInput
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          disabled={!ready}
          placeholder="Search for a business"
        />
        <ComboboxPopover>
            {status === "OK" && data.map(({id, description}) => (
                <ComboboxOption key={id} value={description} />
            ))}
        </ComboboxPopover>
      </Combobox>
    </div>
  );
};

export default Search;
