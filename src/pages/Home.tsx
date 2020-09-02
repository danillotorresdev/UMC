import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios'
import {
  Card,
  CardHeader,
  DaysWrapper,
  Days,
  PatientNameWrapper,
  PatientName,
  HealthInsurance,
  CardBody,
  CardItemsWrapper,
  CardItem,
  CardItemWrapper,
  CardItemLabel,
  CardItemValue,
  ValueAndPendenciesWrapper,
  Value,
  Pendencies,
  CardFoooter,
  BillTypes,
  BillType,
  AttachmentsAndDocuments,
  Atachments,
  Documents,
} from './styles';
import { FiPaperclip } from 'react-icons/fi';
import { IoIosDocument } from 'react-icons/io';

const Home: React.FC = () => {

  interface BillSources {
    label: string;
    value: number;
  }

  interface Cards {
    activityId: number;
    billSources: Array<BillSources>;
    billTypes: Array<string>;
    days: number;
    hasPendingDocument: boolean;
    healthInsurance: string;
    id: number;
    patientName: string;
    pendencies: number;
    showAttachment: boolean;
    showDocument: boolean;
    status: string;
    value: number;
  }

  interface CardsCount {
    delayed: Number;
    warning: Number;
    good: Number;
  }
  interface Activitiy {
    id: number;
    name: string;
    cardsCount: CardsCount;
  }

  const [activities, setActivities] = useState<Activitiy[]>([]);
  const [value, setValue] = useState(1);
  const [cards, setCards] = useState<Cards[]>([]);


  useEffect(() => {
    axios.get('http://localhost:3000/activities').then((res) => setActivities(res.data));
  }, []);

  useEffect(() => {
    setCards([]);
    axios.get('http://localhost:3000/cards').then((res) => {
      let newCards = [];
      for (let card of res.data) {
        if (card.activityId === value) {
          newCards.push(card)
        }
      }
      if (newCards) {
        setCards(newCards)
      }
    })

  }, [value])

  const handleChange = (e: React.SyntheticEvent<EventTarget>) => {
    const simpleInput = parseInt((e.target as HTMLInputElement).value);
    //for simple html input values
    setValue(simpleInput)
  }

  return (
    <>
      <select
        value={value}
        onChange={(e) => handleChange(e)}>
        {
          Object.keys(activities)
            .map(activity => {
              const index = parseInt(activity)
              return <option key={activities[index].id} value={activities[index].id}>{activities[index].name}</option>
            })
        }
      </select>
      {cards && cards.map(card => <Card>
        <CardHeader>
          <DaysWrapper>
            <Days>{card.days}</Days>
          </DaysWrapper>
          <PatientNameWrapper>
            <PatientName> {card.patientName}</PatientName>
            <HealthInsurance> {card.healthInsurance}</HealthInsurance>
          </PatientNameWrapper>
          <input type="checkbox" />
        </CardHeader>
        <CardBody>
          <CardItemsWrapper>
            <CardItem>
              {card.billSources && card.billSources.map((billsource, index) => (
                <CardItemWrapper>
                  <CardItemLabel>{billsource.label}</CardItemLabel>
                  <CardItemValue>{billsource.value}</CardItemValue>
                </CardItemWrapper>
              ))}

            </CardItem>
          </CardItemsWrapper>
          <ValueAndPendenciesWrapper>
            <Value>R$ {card.value}</Value>
            <Pendencies>{card.pendencies} pendências</Pendencies>
          </ValueAndPendenciesWrapper>
        </CardBody>
        <CardFoooter>
          <BillTypes>
            {card.billTypes.map(billType => <BillType>{billType}</BillType>)}
          </BillTypes>
          <AttachmentsAndDocuments>
            <Atachments>
              <FiPaperclip color="#4e566d" size="1.3em"/>
            </Atachments>
            <Documents>
              <IoIosDocument color="#4e566d" size="1.5em"/>
            </Documents>
          </AttachmentsAndDocuments>

        </CardFoooter>
      </Card>)}


      <h1> eae</h1>
    </>
  )
}

export default Home;
