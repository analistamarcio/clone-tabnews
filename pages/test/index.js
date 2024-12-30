function DayOfWeek() {
  const d = new Date();
  let day = d.getDay();
  let linkReturn;

  switch (day) {
    case 1:
      linkReturn = "adt3sotouKY";
      break;
    case 2:
      linkReturn = "trPTACTi4u0";
      break;
    default:
      linkReturn = "https://www.cutthecode.com/404";
      break;
  }

  return linkReturn;
}

export default function ReturnLink() {
  return (
    <>
      <DayOfWeek />
    </>
  );
}

/*
domingo:
mQ_9fBlSYvo
segunda:
adt3sotouKY
terça:
trPTACTi4u0
quarta:
aPIydl4UH6U
quinta:
PELHi5nipXI
sexta:
B4uHeJrlpSo
sábado:
UTW_1FufwFU
*/
