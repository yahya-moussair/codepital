//! create class patient
class Patient {
  static patientArray = [];
  constructor(name, Illness, Money, Pocket, HealthState, Traitment) {
    this.name = name;
    this.Illness = Illness;
    this.Money = Money;
    this.Pocket = Pocket;
    this.HealthState = HealthState;
    this.Traitment = Traitment;
    Patient.patientArray.push(this);
  }
  //! this method for move the  patient from place to another
  goTo(prevPlace, place) {
    prevPlace.splice(this);
    place.push(this);
  }
  //? leet it wait
  takeCare() {}
  //? this mathod for make the patient pay , doctor and traitemnet
  pay() {
    console.log(this.name + ' now in the pharmacy');
    for (let i = 0; i < rahma.traitements.length; i++) {
        if (this.Illness == rahma.traitements[i].name) {
            if (this.Money>=rahma.traitements[i].price) {
                this.Money -= rahma.traitements[i].price
                rahma.traitements[i].Money += rahma.traitements[i].price
                console.log(`${this.name} b9a 3ando ${this.Money}`);
                this.HealthState = 'bikhir'
                this.Pocket.push(this.Money)
                console.log(`rah b9a 3ando fel pocket ghir  ${this.Pocket}`);
                break;
            }else{
                this.goTo(rahma.people , ma9bara.people)
                this.HealthState = 'dead'
                console.log('had khona rah allah yerahmo '+ this.HealthState);
                break;
            }
        }
    }
  }
}
//! create instance from patient
const Marcus = new Patient("Marcus", "Indentation Error", 100, [], "Ill", '');
const Optimus = new Patient("Optimus", "Unsave", 200, [], "Ill", '');
const Sangoku = new Patient("Sangoku", "404", 80, [], "Ill", []);
const DarthVader = new Patient("DarthVader", "Asthmatic", 110, [], "Ill", '');
const Semicolon = new Patient("Semicolon", "Syntax Error ", 60, [], "Ill", '');
//! create DiagnosisGrid array
const DiagnosisGrid = [
  {
    name: "Indentation Error",
    traitement: "Ctrl+Shift+F",
    price: 60,
  },
  {
    name: "Unsave",
    traitement: "SaveOnFocusChange",
    price: 100,
  },
  {
    name: "404",
    traitement: "CheckLinkRelation",
    price: 60,
  },
  {
    name: "Asthmatic",
    traitement: "Ventolin",
    price: 60,
  },
  {
    name: "SyntaxError",
    traitement: "F12+Doc",
    price: 60,
  },
];
//! create doctore class extend name and money from patient
class Doctore {
  constructor(name, Money, office, waittingRoom) {
    this.name = name;
    this.Money = Money;
    this.office = office;
    this.waittingRoom = waittingRoom;
  }
  Diagnosis(patient) {
    for (let i = 0; i < DiagnosisGrid.length; i++) {
      if (patient.Illness == DiagnosisGrid[i].name) {
          patient.traitement = DiagnosisGrid[i].traitement;
        console.log(
          "nta mrid b " +
            patient.Illness +
            " w l7al dyyalek asahbi howa dwa dyal " +
            patient.traitement + "sir l pharmacy bach techri dwa"
        );
        break;
      }
    }
  }
  //! for make the patient in the office
  patientIn(patient) {
    if (this.office.length == 0) {
      patient.Money -= 50;
      this.Money += 50;
      console.log(`now ${patient.name} is in the office`);
      this.office.push(patient);
      console.log(`${patient.name} pay 50$ for consultation.`);
      this.waittingRoom.splice(patient, 1);
    } else {
      console.log("wait for office empty");
    }
  }
  //! for make the patient out the office
  patientOut(patient) {
    this.waittingRoom.push(patient);
    this.office.splice(this, 1);
    console.log(``);
  }
}

//! create instance from doctore class
const Debugger = new Doctore("Debugger", 0, [], []);

//! create array for put the Illness and the Treatment Illness

class Pharmacy {
  constructor(name, people, traitements, Money) {
    this.name = name;
    this.people = people;
    this.traitements = traitements;
    this.Money = Money;
  }
  //! thhis method for decide if the the patient have enough money or not , and dicide if the
  //! patient will be in good health or , be dead, and you will need to push them into a cemetery.
}
const rahma = new Pharmacy("rahma", [], [], 0);
//! for push all traitements instances in the traitement pharmacy array
for (let i = 0; i < DiagnosisGrid.length; i++) {
  rahma.traitements.push(DiagnosisGrid[i]);
}

const ma9bara = {
    name : 'ma9bara',
    people: []
}

//^ start action for marcus
for (let i = 0; i < Patient.patientArray.length; i++) {
  Debugger.waittingRoom.push(Patient.patientArray[i]);
  console.log(Patient.patientArray[i].name + " in the waiting Room ");
}
console.log("***********************************************");
//? first push all patient in the waiting room
for (let i = 0; i < Patient.patientArray; i++) {
  Debugger.waittingRoom.push(Patient.patientArray[i]);
  console.log(Patient.patientArray[i].name);
}
console.log("*************************************************");
//? the patient go to the debugger office
Debugger.patientIn(Marcus);

console.log(
  `${Marcus.name} now have ${Marcus.Money} $ after paying 50 $ for consultation , and the doctore have ${Debugger.Money} $`
);

console.log("************************************************");
Debugger.Diagnosis(Marcus)
console.log("************************************************");
Marcus.goTo(Debugger.waittingRoom , rahma.people)
Marcus.pay()








