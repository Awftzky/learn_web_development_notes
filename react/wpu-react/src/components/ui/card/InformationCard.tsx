type MakananProps = {
  NamaMakanan: string;
  HargaMakanan: number;
};

export const InformationCard = (props: MakananProps) => {
  const { NamaMakanan, HargaMakanan } = props;
  return (
    <div>
      <h1> Nama Makanan : {NamaMakanan}</h1>
      <h2> Harga Makanan : {HargaMakanan}</h2>
    </div>
  );
};
