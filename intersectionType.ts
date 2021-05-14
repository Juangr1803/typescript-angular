export {};

interface Interface1 {
  prop1: number;
}

interface Interface2 {
  prop2: number;
}

interface Interface3 {
  prop3: number;
}

type InterfaceMix = Interface1 & Interface2 & Interface3;

const interfaceMix: InterfaceMix = {
  prop1: 2,
  prop2: 32,
  prop3: 32,
};
