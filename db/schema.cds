namespace sap.cap.productshop;
using { cuid, managed } from '@sap/cds/common';

aspect carbonemission{
    emission: Integer;
    rating: String;
}

entity product: cuid, carbonemission, managed
{
    name : String;
    stock : Integer;
    price : Integer;
}

entity supplier
{
    key ID : Integer;
    name : String(100);
    city : String(100);
    phone : String(100);
}
