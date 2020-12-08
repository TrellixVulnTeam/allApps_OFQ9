<template>
  <b-container>
    <b-row>
      <b-col md="3">
        <b-form-input class="my-1" 
          v-model="Fname"
          placeholder="Frist Name"
        ></b-form-input>
      </b-col>

      <b-col md="3">
        <b-form-input class="my-1" 
        v-model="Lname"
        placeholder="Last Name"
        ></b-form-input>
      </b-col>

      <b-col md="3">
       <b-form-input class="my-1" 
        v-model="age"
        placeholder="Age"
        type="number"
        ></b-form-input>
      </b-col>
      
      <b-col md="3">
        <b-form-input class="my-1" 
        v-model="phoneNumber"
        placeholder="Phone Number"
        ></b-form-input>
      </b-col>

      <b-col md="1">
        <b-button variant="info" @click="sort()" class="my-2">search</b-button>
      </b-col>

      <b-col>
      <b-button variant="danger" @click="reset()" class="my-2">reset</b-button>
      </b-col>
    </b-row>
    <b-table
     striped
     borderless
     dark
     responsive
     head-variant="light"
     :items="items2" >
    </b-table>
    <b-alert
    variant="danger"
    dismissible
    fade
    :show="flag"
    @dismissed="flag=false" >
      Not Found!!!
    </b-alert>
  </b-container>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          { first_name: 'Dickerson', last_name: 'Mac' ,age: 40, phone_number : '09308953677'},
          { first_name: 'Larsen', last_name: 'Shy' ,age: 22, phone_number : '09125671833'},
          { first_name: 'Geneva', last_name: 'Wili' ,age: 89, phone_number : '09195231784'},
          { first_name: 'Jami', last_name: 'Carner' ,age: 38, phone_number : '09907521684'},
          { first_name: 'Dicke', last_name: 'Macdonald' ,age: 30, phone_number : '09308953685'},
          { first_name: 'Lara', last_name: 'Shaw' ,age: 18, phone_number : '09125671533'},
          { first_name: 'Geni', last_name: 'Wilson' ,age: 45, phone_number : '09195637844'},
          { first_name: 'Jason', last_name: 'Carney' ,age: 36, phone_number : '09907558684'},
          { first_name: 'Dickerson', last_name: 'Mac' ,age: 41, phone_number : '09308923677'},
          { first_name: 'Larsen', last_name: 'Shy' ,age: 22, phone_number : '09125671833'},
          { first_name: 'Geneva', last_name: 'Wili' ,age: 87, phone_number : '09195631784'},
          { first_name: 'Jami', last_name: 'Carner' ,age: 38, phone_number : '09907521684'},
          { first_name: 'Dock', last_name: 'Macdonald' ,age: 30, phone_number : '09308753685'},
          { first_name: 'Sonya', last_name: 'Shaw' ,age: 18, phone_number : '09125671533'},
          { first_name: 'jim', last_name: 'Wilson' ,age: 45, phone_number : '09195637844'},
          { first_name: 'Loren', last_name: 'Carney' ,age: 36, phone_number : '09123456789'},
          { first_name: 'Dichkerson', last_name: 'Mjac' ,age: 42, phone_number : '09308253677'},
          { first_name: 'Largsen', last_name: 'Shyh' ,age: 27, phone_number : '09125671333'},
          { first_name: 'Gecneva', last_name: 'Wifli' ,age: 85, phone_number : '09195232784'},
          { first_name: 'Jagmi', last_name: 'Carnegr' ,age: 35, phone_number : '09907511684'},
          { first_name: 'Dbicke', last_name: 'Macdbonald' ,age: 37, phone_number : '09318953685'},
          { first_name: 'Lnara', last_name: 'Shanw' ,age: 28, phone_number : '09125671553'},
          { first_name: 'Gyeni', last_name: 'Wilpson' ,age: 45, phone_number : '09195635844'},
          { first_name: 'Jgason', last_name: 'Caroney' ,age: 36, phone_number : '09907588684'},
          { first_name: 'Dfickerson', last_name: 'Maiic' ,age: 81, phone_number : '09305923677'},
          { first_name: 'Lsarsen', last_name: 'Shyy' ,age: 52, phone_number : '09125671633'},
          { first_name: 'Getneva', last_name: 'Witli' ,age: 67, phone_number : '09195635784'},
          { first_name: 'Jeami', last_name: 'Carrner' ,age: 98, phone_number : '09907523684'},
          { first_name: 'Douck', last_name: 'Maecdonald' ,age: 50, phone_number : '09303753685'},
          { first_name: 'Sofnya', last_name: 'Shhaw' ,age: 12, phone_number : '09125671633'},
          { first_name: 'jihm', last_name: 'Wilsjon' ,age: 47, phone_number : '09195637944'},
          { first_name: 'Lokren', last_name: 'Cakrney' ,age: 39, phone_number : '09123496789'}
        ],
        items2: [],
        age : '',
        Fname :'',
        Lname : '',
        phoneNumber : '',
        flag : false,
      }
    },
    mounted() {
      this.items2 = this.items
    },
    methods: {
      sort() {
        this.items2 = this.items.filter((item) => item.first_name.toLowerCase().includes(this.Fname.toLowerCase()) &&
        item.last_name.toLowerCase().includes(this.Lname.toLowerCase()) &&
        item.age.toString().includes(this.age) &&
        item.phone_number.toString().includes(this.phoneNumber) 
        )
        if (! this.items2.length) {
           this.flag = true;
        } else  this.flag = false;
      },
      reset(){
        this.age = ''
        this.Fname = ''
        this.Lname = ''
        this.phoneNumber = ''
        this.flag = false
        this.items2 = this.items
      },
    },
  }
</script>