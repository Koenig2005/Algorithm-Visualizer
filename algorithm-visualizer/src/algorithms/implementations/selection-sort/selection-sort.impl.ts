﻿import { RawData } from "../../../interfaces/raw-data";
import { Algorithm } from "../../algorithm";
import { AlgorithmType } from "../../enums/algorithm-type.enum";
import { startDelay } from "../../../helpers/delay.helper";

export class SelectionSort implements Algorithm {
  public type: AlgorithmType;

  constructor() {
    this.type = AlgorithmType.SelectionSort;
  }

  async sort(data: RawData[], delay: number) {
    let i = 0,
      length = data.length;

    while (i < length - 1) {
      let minIndex = i,
        j = i + 1;

      while (j < length) {
        const first = data[minIndex],
          compare = data[j];

        first.inComparison = true;
        compare.inComparison = true;

        if (compare.value < first.value) {
          minIndex = j;
        }

        j++;

        await startDelay(delay);

        first.inComparison = false;
        compare.inComparison = false;
      }

      const temp = data[i];
      data[i] = data[minIndex];
      data[minIndex] = temp;

      i++;
    }
  }
}
