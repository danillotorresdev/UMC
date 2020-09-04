import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flex;
`;

export const Container = styled.div`
  width: 100%;
  max-width:1100px;
  margin: 0 auto;
  display:flex;
  flex-direction: column;
`;

export const HeaderContent = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SelectWrapper = styled.div`

`;



export const CardsCount = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CardsCountWrapper = styled.div`
    display: flex;
  `;

export const TotalBillsWrapper = styled.div`
  font-size: 12px;
  color: gray;
  span{
    color: #000;
  }
`;

export const Delayed = styled.div`
  span{
    color: #fd5958;
  }
`;
export const Warning = styled.div`
span{
    color:#ffc736;
  }
  margin-left: 20px;
`;
export const Good = styled.div`
  span{
      color:#21bf6b;
  }
  margin-left: 20px;
`;

export const OrganizeByWrapper = styled.div``;

export const OrganizeBySelect = styled.select`
  width: 180px;
  height: 40px;
  background: transparent;
  padding: 0 5px;
  font-size: 14px;
  border:none;
  color: #4e566d;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding-left: 10px;
  position: relative;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image:
    linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%),
    linear-gradient(to right, #ccc, #ccc);
  background-position:
    calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px),
    calc(100% - 2.5em) 0.5em;
  background-size:
    5px 5px,
    5px 5px,
    1px 1.5em;
  background-repeat: no-repeat;
       option {
         color: black;
         font-weight: small;
         display: flex;
         white-space: pre;
         min-height: 20px;
         padding: 0px 2px 1px;
       }
`;

export const SelectActivity = styled.select`
  width: 300px;
  height: 40px;
  background: transparent;
  padding-left: 5px;
  font-size: 14px;
  border:none;
  font-size: 20px;
  color: #000;
  margin-left: 0;
  padding-left: 0;
       option {
         color: black;
         font-weight: small;
         display: flex;
         white-space: pre;
         min-height: 20px;
         padding: 0px 2px 1px;
       }
`;
export const BodyContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-content: space-between;
  height: 740px;

`;
export const FooterContent = styled.div``;

export const Card = styled.div`
  box-shadow: 1px 0px 6px #ccc;
  width: 32%;
  height: 225px;
  background-color: #fff;
  border-radius: 3px;
  padding:15px;
margin-bottom: 20px;

`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DaysWrapper = styled.div`

`;

export const Days = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  height: 50px;
  width:50px;
  border-radius: 50%;
  color: #fff;
`;

export const PatientNameWrapper = styled.div`
  flex-grow: 2;
  padding-left:10px;
`;

export const PatientName = styled.p``;
export const HealthInsurance = styled.span`
  font-size: 10px;
  color: gray;
`;

export const CardBody = styled.div`
  margin-top: 10px;
`;
export const CardItemsWrapper = styled.div`

`;
export const CardItem = styled.div`
  display: flex;
  justify-content: space-between;

`;
export const CardItemWrapper = styled.div``;

export const CardItemLabel = styled.div`
  font-size: 10px;
  color: gray;
`;
export const CardItemValue = styled.div``;


export const ValueAndPendenciesWrapper = styled.div`
  background-color: #f6f7fb;
  display: flex;
  padding: 10px;
  margin-top:10px;
  align-items: center;
  border-radius: 3px;
`;
export const Value = styled.p`
  font-size: 18px;
`;
export const Pendencies = styled.div`
  color: #67b3ff;
  margin-left: auto;
  border: 1px solid #67b3ff;
  padding: 5px 20px;
  border-radius:20px;
  font-size: 12px;
  font-weight: bold;
`;

export const CardFoooter = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
`;

export const BillTypes = styled.div``;

export const BillType = styled.span`
  border: 1px solid #4e566d;
  color: #4e566d;
  border-radius: 50%;
  padding: 5px 9px;
  font-size: 13px;
  margin-right: 5px;
  font-weight: bold;
`;

export const AttachmentsAndDocuments = styled.div`
  display:flex;
  align-items: center;
`;
export const Atachments = styled.div`
  display:flex;
  align-items: center;
  margin-right: 10px;
`;
export const Documents = styled.div`
  display:flex;
  align-items: center;
`;
