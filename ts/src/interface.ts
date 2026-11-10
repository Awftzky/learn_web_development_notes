interface IProcessor {
  brand: string;
  baseModel: string;
  modelName: string;
}

function create(processor: IProcessor): void {
  console.log(`Berhasil membuat processor ${processor.brand}`);
}

interface MChip extends IProcessor {
  maxModel: string;
}
