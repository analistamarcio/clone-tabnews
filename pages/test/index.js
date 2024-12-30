function DayOfWeek() {
  const d = new Date();
  let day = d.getDay();
  let linkReturn;

  switch (day) {
    case 1:
      linkReturn = "https://youtu.be/adt3sotouKY";
      break;
    case 2:
      linkReturn = "https://youtu.be/trPTACTi4u0";
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
https://youtu.be/mQ_9fBlSYvo
segunda:
https://youtu.be/adt3sotouKY
terça:
https://youtu.be/trPTACTi4u0
quarta:
https://youtu.be/aPIydl4UH6U
quinta:
https://youtu.be/PELHi5nipXI
sexta:
https://youtu.be/B4uHeJrlpSo
sábado:
https://youtu.be/UTW_1FufwFU
*/
