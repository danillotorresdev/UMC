import styled from 'styled-components';

export const Card = styled.div`
  box-shadow: 1px 0px 6px #ccc;
  width: 300px;
  height: 225px;
  margin: 10px;
  background-color: #fff;
  border-radius: 3px;
  padding:15px;
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
