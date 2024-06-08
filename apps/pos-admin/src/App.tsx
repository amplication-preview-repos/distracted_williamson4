import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SpaList } from "./spa/SpaList";
import { SpaCreate } from "./spa/SpaCreate";
import { SpaEdit } from "./spa/SpaEdit";
import { SpaShow } from "./spa/SpaShow";
import { TherapistList } from "./therapist/TherapistList";
import { TherapistCreate } from "./therapist/TherapistCreate";
import { TherapistEdit } from "./therapist/TherapistEdit";
import { TherapistShow } from "./therapist/TherapistShow";
import { CheckInList } from "./checkIn/CheckInList";
import { CheckInCreate } from "./checkIn/CheckInCreate";
import { CheckInEdit } from "./checkIn/CheckInEdit";
import { CheckInShow } from "./checkIn/CheckInShow";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { StoreCreditList } from "./storeCredit/StoreCreditList";
import { StoreCreditCreate } from "./storeCredit/StoreCreditCreate";
import { StoreCreditEdit } from "./storeCredit/StoreCreditEdit";
import { StoreCreditShow } from "./storeCredit/StoreCreditShow";
import { DiscountList } from "./discount/DiscountList";
import { DiscountCreate } from "./discount/DiscountCreate";
import { DiscountEdit } from "./discount/DiscountEdit";
import { DiscountShow } from "./discount/DiscountShow";
import { AddonList } from "./addon/AddonList";
import { AddonCreate } from "./addon/AddonCreate";
import { AddonEdit } from "./addon/AddonEdit";
import { AddonShow } from "./addon/AddonShow";
import { OrderItemList } from "./orderItem/OrderItemList";
import { OrderItemCreate } from "./orderItem/OrderItemCreate";
import { OrderItemEdit } from "./orderItem/OrderItemEdit";
import { OrderItemShow } from "./orderItem/OrderItemShow";
import { CheckOutList } from "./checkOut/CheckOutList";
import { CheckOutCreate } from "./checkOut/CheckOutCreate";
import { CheckOutEdit } from "./checkOut/CheckOutEdit";
import { CheckOutShow } from "./checkOut/CheckOutShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"POS"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Spa"
          list={SpaList}
          edit={SpaEdit}
          create={SpaCreate}
          show={SpaShow}
        />
        <Resource
          name="Therapist"
          list={TherapistList}
          edit={TherapistEdit}
          create={TherapistCreate}
          show={TherapistShow}
        />
        <Resource
          name="CheckIn"
          list={CheckInList}
          edit={CheckInEdit}
          create={CheckInCreate}
          show={CheckInShow}
        />
        <Resource
          name="Order"
          list={OrderList}
          edit={OrderEdit}
          create={OrderCreate}
          show={OrderShow}
        />
        <Resource
          name="StoreCredit"
          list={StoreCreditList}
          edit={StoreCreditEdit}
          create={StoreCreditCreate}
          show={StoreCreditShow}
        />
        <Resource
          name="Discount"
          list={DiscountList}
          edit={DiscountEdit}
          create={DiscountCreate}
          show={DiscountShow}
        />
        <Resource
          name="Addon"
          list={AddonList}
          edit={AddonEdit}
          create={AddonCreate}
          show={AddonShow}
        />
        <Resource
          name="OrderItem"
          list={OrderItemList}
          edit={OrderItemEdit}
          create={OrderItemCreate}
          show={OrderItemShow}
        />
        <Resource
          name="CheckOut"
          list={CheckOutList}
          edit={CheckOutEdit}
          create={CheckOutCreate}
          show={CheckOutShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
