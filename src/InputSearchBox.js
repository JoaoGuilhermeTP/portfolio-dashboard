import { useEffect, useState } from 'react';


export default function InputSearchBox({placeholder, value, onChange, instantanious}) {
  const [LocalValue, setLocalValue] = useState(value);

  if (instantanious === true) {
    return (
      <div>
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        {value.length > 0 && (
          <button onClick={() => onChange('')}>Clear</button>
        )}
      </div>
    );
  } else {
    return (
      <div>
        <input
          type="text"
          placeholder={placeholder}
          value={LocalValue}
          onChange={(e) => setLocalValue(e.target.value)}
        />
        <button onClick={() => onChange(LocalValue)}>Search</button>
      </div>
    );
  }
}