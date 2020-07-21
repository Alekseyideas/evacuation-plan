import React from 'react';
import html2canvas from 'html2canvas';
import JsPDF from 'jspdf';

export const usePdfGen = (ids: string[], callBack?: () => void) => {
  const [loading, setLoading] = React.useState(false);

  const downloadHandler = React.useCallback(async () => {
    interface imgsData {
      id: number;
      img: string;
    }
    const imgsData: imgsData[] = [];
    // const imageSize = 1;
    // const s = imageSize / 2;
    // const w = 740 * s;
    // const h = 422 * s;
    const pdf = new JsPDF('l', 'px', 'a3');
    // const pdf = new JsPDF('l', 'px', [h, w]);
    // console.log(ids, 'ids');
    const promises = ids.map(async (id, num) => {
      const input = document.getElementById(id);
      if (!input) return null;
      const canvas = await html2canvas(input, {
        useCORS: true,
        // allowTaint: false,
        scale: 2,
        // logging: true,
        backgroundColor: null,
        id,
      });
      const imgData = await canvas.toDataURL('image/jpg');
      console.log('imgData: ', imgData);
      return imgsData.push({ img: imgData, id: num });
    });

    await Promise.all(promises);
    imgsData.sort((a, b) => a.id - b.id);

    imgsData.forEach((imgData: imgsData, i: number) => {
      // console.log(imgData.img);
      pdf.addImage(imgData.img, 'JPEG', 45, 10, 800, 600);
      if (i !== imgsData.length - 1) {
        pdf.addPage();
      }
    });
    pdf.save('plan.pdf');
    setLoading(false);
    callBack && callBack();
    return true;
  }, [callBack, ids]);
  return {
    downloadHandler,
    loading,
    setLoading,
  };
};
