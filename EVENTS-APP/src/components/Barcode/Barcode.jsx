import { useState, useRef, useEffect } from 'react';
import JsBarcode from 'jsbarcode';

function Barcode({value}) {
    const [barcodeValue, setBarcodeValue] = useState('');
    const svgRef = useRef(null);

    useEffect(() => {
    if (barcodeValue && svgRef.current) {
      JsBarcode(svgRef.current, value, {
        format: 'CODE128',
        lineColor: '#000',
        width: 2,
        height: 40,
        displayValue: true,
      });
    }
  }, [value]);

  
  


  return (
    <svg ref={svgRef}></svg>

  );
}

export default Barcode;