import React from "react";
import { Color } from "../colorCodes";

export const PassportIcon = (props: IconProps) => {
  const { size = 15, color = Color.iconGray } = props;

  return (
    <svg
      fill={color as string}
      width={`${size}px`}
      height={`${size}px`}
      viewBox="-0.5 0 24 24"
    >
      <path d="m9.36 19.68c-.24 0-.4.24-.4.64 0 .32.16.64.48.64.24 0 .4-.24.4-.64 0-.32-.16-.64-.48-.64z" />
      <path d="m2.96 19.68c0 .08-.08.24-.08.32l-.08.4h.4l-.08-.4c-.08-.08-.08-.16-.16-.32z" />
      <path d="m1.44 19.68h-.16v.56h.16c.24 0 .32-.08.32-.32s-.08-.24-.32-.24z" />
      <path d="m7.6 19.68h-.16v.56h.16c.24 0 .32-.08.32-.32s-.16-.24-.32-.24z" />
      <path d="m11.12 19.68h-.16v.48h.16c.24 0 .32-.08.32-.24s-.16-.24-.32-.24z" />
      <path d="m23.12 5.84-11.68-5.76c-.084-.053-.186-.085-.295-.085-.223 0-.415.132-.503.322l-.001.003v.08l-.24.4-1.36 2.8h4.88.016c.698 0 1.264.566 1.264 1.264v.017-.001 18.4c.08-.08.16-.16.16-.24l8-16.4c.049-.082.078-.182.078-.288 0-.223-.128-.417-.315-.51l-.003-.001z" />
      <path d="m9.2 14.64c-.496-.174-1.069-.288-1.665-.319l-.015-.001v2.32c.83-.378 1.447-1.1 1.675-1.979z" />
      <path d="m9.44 9.68c-.544.203-1.173.321-1.829.321-.032 0-.064 0-.095-.001h.005v1.28h2.16c-.008-.573-.095-1.123-.251-1.642l.011.042z" />
      <path d="m7.52 7.12v2.16c.022 0 .049.001.075.001.579 0 1.131-.118 1.632-.331l-.027.01c-.218-.865-.847-1.546-1.662-1.834z" />
      <path d="m10.24 14.16c.29.159.514.409.637.711l.003.009c.622-.71 1.03-1.62 1.119-2.622l.001-.018h-1.52c.006.094.009.205.009.316 0 .573-.091 1.125-.26 1.642l.011-.037z" />
      <path d="m3.92 15.52c.252.224.542.412.859.552l.021.008c-.221-.3-.41-.643-.55-1.01l-.01-.03c-.148.124-.259.287-.318.473z" />
      <path d="m10.32 7.92c-.3-.235-.639-.472-.991-.691l-.049-.029c.285.345.527.741.708 1.169l.012.031c.16 0 .32-.24.32-.48z" />
      <path d="m9.44 16.08c.309-.147.573-.335.8-.56-.028-.206-.149-.379-.317-.478l-.003-.002c-.082.399-.25.749-.484 1.045z" />
      <path d="m10.56 11.36h1.52c-.113-1.031-.486-1.958-1.051-2.736l.011.016c-.156.315-.405.564-.711.716l-.009.004c.08.64.16 1.28.24 2z" />
      <path d="m9.68 12.24h-2.16v1.2c.696.019 1.353.164 1.956.413l-.036-.013c.145-.477.232-1.027.24-1.596z" />
      <path d="m4.72 7.44c-.308.119-.573.281-.803.483l.003-.003c.013.193.103.362.239.479l.001.001c.128-.371.319-.691.562-.963z" />
      <path d="m3.92 9.28c-.253-.174-.466-.387-.635-.632l-.005-.008c-.624.765-1.032 1.728-1.119 2.782l-.001.018h1.44c.018-.776.133-1.517.335-2.222z" />
      <path d="m6.64 16.48v-2.16c-.601.068-1.143.18-1.667.337l.067-.017c.207.847.803 1.521 1.582 1.834z" />
      <path d="m14.24 5.12c0-.007 0-.016 0-.024 0-.321-.245-.585-.558-.615h-.003-13.04c-.016-.002-.035-.002-.054-.002-.325 0-.589.264-.589.589 0 .019.001.038.003.056v-.002 18.24.009c0 .349.283.631.631.631h.009 12.96c.343-.024.616-.297.64-.638v-.002zm-12.88 6.08c.255-2.808 2.472-5.025 5.257-5.278l.023-.002v-.08h.88v.08c2.973.236 5.297 2.706 5.297 5.72 0 3.168-2.568 5.737-5.737 5.737-.155 0-.308-.006-.46-.018l.02.001c-2.977-.263-5.293-2.744-5.293-5.767 0-.138.005-.276.014-.411zm.08 9.36h-.16v.64h-.4v-1.84h.56c.026-.003.056-.005.087-.005.18 0 .345.062.475.166l-.002-.001c.16.08.16.24.16.4-.003.155-.063.295-.16.4-.133.148-.326.24-.54.24-.007 0-.014 0-.021 0zm1.92.64-.16-.48h-.48l-.16.48h-.4l.56-1.84h.56l.56 1.84zm1.12 0c-.023.002-.051.003-.078.003-.145 0-.283-.031-.408-.086l.006.003.08-.32c.118.052.257.083.402.083.027 0 .055-.001.082-.003h-.004c.16 0 .24-.08.24-.16s-.08-.16-.32-.24c-.24-.16-.48-.32-.48-.56 0-.32.24-.56.72-.56.023-.002.051-.003.078-.003.145 0 .283.031.408.086l-.006-.003-.08.32c-.088-.054-.196-.087-.31-.087-.032 0-.063.002-.093.007h.003c-.16 0-.24.08-.24.16s.08.16.32.24c.27.05.473.28.48.559v.001c0 .32-.24.56-.8.56zm1.52 0c-.023.002-.051.003-.078.003-.145 0-.283-.031-.408-.086l.006.003v-.32c.118.052.257.083.402.083.027 0 .055-.001.082-.003h-.004c.16 0 .32-.08.32-.16s-.08-.16-.32-.24c-.271-.025-.481-.251-.481-.527 0-.012 0-.023.001-.035v.002c0-.32.24-.56.72-.56.023-.002.051-.003.078-.003.145 0 .283.031.408.086l-.006-.003-.08.32c-.088-.054-.196-.087-.31-.087-.032 0-.063.002-.093.007h.003c-.16 0-.24.08-.24.16s.08.16.32.24c.27.05.473.28.48.559v.001c-.062.326-.345.57-.685.57-.041 0-.08-.003-.119-.01l.004.001zm2.16-.8c-.098.113-.241.184-.402.184-.056 0-.111-.009-.162-.025l.004.001h-.16v.64h-.4v-1.84h.56c.026-.003.056-.005.087-.005.18 0 .345.062.475.166l-.002-.001c.16.08.16.24.16.4-.018.18-.075.343-.163.485zm2.08-.16c.005.035.008.076.008.117 0 .454-.358.823-.806.843h-.002-.16c-.484-.004-.876-.396-.88-.88v-.08c-.002-.021-.003-.045-.003-.069 0-.462.35-.842.799-.891h.004.08.004c.458 0 .834.35.876.797v.004zm1.2.96c-.08-.16-.08-.24-.16-.4-.08-.24-.16-.32-.32-.32h-.16v.72h-.4v-1.84h.56c.034-.006.073-.009.113-.009.172 0 .329.064.448.17l-.001-.001c.097.105.157.245.16.399v.001c-.005.213-.134.395-.317.479l-.003.001c.16.08.16.16.24.32.018.18.075.343.163.485l-.003-.005zm2-1.44h-.48v1.44h-.4v-1.44h-.56v-.32h1.36v.32z" />
      <path d="m3.92 14.16c-.137-.563-.25-1.245-.315-1.941l-.005-.059h-1.36c.114 1.004.487 1.905 1.05 2.654l-.01-.014c.174-.253.387-.466.632-.635z" />
      <path d="m6.64 12.24h-2.16c.001.571.089 1.122.251 1.639l-.011-.039c.561-.196 1.213-.338 1.889-.398l.031-.002z" />
      <path d="m6.64 6.96c-.88.16-1.44 1.12-1.68 1.84.491.196 1.06.337 1.653.398l.027.002z" />
      <path d="m6.64 11.36v-1.28c-.696-.019-1.353-.164-1.956-.413l.036.013c-.151.503-.239 1.081-.24 1.679v.001z" />
    </svg>
  );
};
