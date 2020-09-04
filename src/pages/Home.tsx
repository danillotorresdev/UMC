import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios'
import {
  HomeWrapper,
  Container,
  HeaderContent,
  BodyContent,
  FooterContent,
  SelectActivity,
  Card,
  CardHeader,
  SelectWrapper,
  CardsCount,
  Delayed,
  Warning,
  Good,
  OrganizeByWrapper,
  OrganizeBySelect,
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
  CardsCountWrapper,
  TotalBillsWrapper,
} from './styles';
import { FiPaperclip } from 'react-icons/fi';
import { IoIosDocument } from 'react-icons/io';
import Pagination from '../components/Pagination';
import Sidebar from '../components/Sidebar'

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
    delayed: number;
    warning: number;
    good: number;
  }
  interface Activitiy {
    id: number;
    name: string;
    cardsCount: CardsCount;
  }

  const [activities, setActivities] = useState<Activitiy[]>([]);
  const [value, setValue] = useState(1);
  const [cards, setCards] = useState<Cards[]>([]);
  const [cardsCount, setCardsCount] = useState<CardsCount>();
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(9);

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

  useEffect(() => {
    const findActivity = activities.filter((activitiy => activitiy.id === value));
    setCardsCount(findActivity[0]?.cardsCount);
  }, [activities, value])

  const handleChange = (e: React.SyntheticEvent<EventTarget>) => {
    const simpleInput = parseInt((e.target as HTMLInputElement).value);
    //for simple html input values
    setValue(simpleInput)
  }

  // Get current cards
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstPost = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstPost, indexOfLastCard);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const delayed = cardsCount?.delayed;
  const warning = cardsCount?.warning;
  const good = cardsCount?.good;

  let totalBills;
  if (delayed !== undefined && warning !== undefined && good !== undefined) {
    totalBills = (delayed + warning + good);
  }



  return (
    <HomeWrapper>
      <Sidebar />
      <Container>
        <HeaderContent>
          {console.log(typeof delayed)}
          <SelectWrapper>
            <SelectActivity
              value={value}
              onChange={(e) => handleChange(e)}>
              {
                Object.keys(activities)
                  .map(activity => {
                    const index = parseInt(activity)
                    return <option key={activities[index].id} value={activities[index].id}>{activities[index].name}</option>
                  })
              }
            </SelectActivity>
          </SelectWrapper>
          <CardsCount>
            <CardsCountWrapper>
              <Delayed><span>●</span> {cardsCount?.delayed} cards</Delayed>
              <Warning><span>●</span> {cardsCount?.warning} cards</Warning>
              <Good><span>●</span> {cardsCount?.good} cards</Good>
            </CardsCountWrapper>
            <TotalBillsWrapper>Total <span>{totalBills} contas</span></TotalBillsWrapper>
          </CardsCount>
          <OrganizeByWrapper>
            <span>Organizar por: </span>
            <OrganizeBySelect>
              <option>Prioridade (SLA)</option>
              <option>Any</option>
              <option>Any</option>
            </OrganizeBySelect>
          </OrganizeByWrapper>
        </HeaderContent>
        <BodyContent>
          {currentCards && currentCards.map(card => <Card>
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
                  <FiPaperclip color="#4e566d" size="1.3em" />
                </Atachments>
                <Documents>
                  <IoIosDocument color="#4e566d" size="1.5em" />
                </Documents>
              </AttachmentsAndDocuments>
            </CardFoooter>
          </Card>)}
        </BodyContent>
        <FooterContent>
          <Pagination
            cardsPerPage={8}
            totalCards={cards.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </FooterContent>
      </Container>
    </HomeWrapper>
  )
}

export default Home;
