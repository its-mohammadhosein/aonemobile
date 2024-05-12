import React from 'react';
import Image from "next/image";
import gil1 from '@/public/img/gil-1.png'
import gil2 from '@/public/img/gil-2.png'

function AppetizerAndSalads(props) {
    return (
        <>
            <div className={''} id={'appetizerandsalad'}   >
<div className={'w-full  h-[2rem] px-4 flex justify-center items-center py-6 text-3xl gap-2'}>
    <div className={'flex items-center'}><Image src={gil2} height={32} alt={'gil'}/></div>
    <div className={'text-[19px]'}>Appertize and Salad</div>
    <div className={'flex items-center'}><Image src={gil1} height={32} alt={"gil"}  /></div>
</div>
                <div className={'items-container px-4 mt-2'}>

                    <div className={"product mb-12 flex flex-col"}>
                        <div className={'grid grid-cols-2 text-[20px]'}>
                            <div className={'flex justify-start'}>125</div>
                            <div className={'flex justify-end'}>سوپ</div>
                        </div>
                        <div className={'grid grid-cols-2 [&>*]:text-black/45 text-[12px] py-2'}>
                            <div className={'flex justify-start text-start'}>
                                Soup or Ash of the Day
                            </div>
                            <div className={'flex justify-end text-end'}>
                                سوپ یا آش روز
                            </div>
                        </div>
                    </div>
                    <div className={"product mb-12 flex flex-col"}>
                        <div className={'grid grid-cols-2 text-[20px]'}>
                            <div className={'flex justify-start'}>120</div>
                            <div className={'flex justify-end'}>زیتون پرورده</div>
                        </div>
                        <div className={'grid grid-cols-2 [&>*]:text-black/45 text-[12px] py-2'}>
                            <div className={'flex justify-start text-start'}>
                                Marinated olives , walnuts ,
                                pomegranate molasses , herbs
                            </div>
                            <div className={'flex justify-end text-end'}>
                                زيتون بدون هسته ، رب انار، گردو ، سبزی معطر
                            </div>
                        </div>
                    </div>
                    <div className={"product mb-12 flex flex-col"}>
                        <div className={'grid grid-cols-2 text-[20px]'}>
                            <div className={'flex justify-start'}>195</div>
                            <div className={'flex justify-end'}>کشک بادمجان</div>
                        </div>
                        <div className={'grid grid-cols-2 [&>*]:text-black/45 text-[12px] py-2'}>
                            <div className={'flex justify-start text-start'}>
                                Fried eggplant , onion , mint ,
                                walnut whey
                            </div>
                            <div className={'flex justify-end text-end'}>
                                بادمجان سرخ شده کشک ، نعنا داغ ، پياز
                                داغ
                            </div>
                        </div>
                    </div>
                    <div className={"product mb-12 flex flex-col"}>
                        <div className={'grid grid-cols-2 text-[20px]'}>
                            <div className={'flex justify-start'}>75</div>
                            <div className={'flex justify-end'}>ماست دلار</div>
                        </div>
                        <div className={'grid grid-cols-2 [&>*]:text-black/45 text-[12px] py-2'}>
                            <div className={'flex justify-start text-start'}>
                                Yogurt and Dallar
                            </div>
                            <div className={'flex justify-end text-end'}>
                                ماست چکیده، سبزی دلار
                            </div>
                        </div>
                    </div>
                    <div className={"product mb-12 flex flex-col"}>
                        <div className={'grid grid-cols-2 text-[20px]'}>
                            <div className={'flex justify-start'}>85</div>
                            <div className={'flex justify-end'}>ماست شیرازی</div>
                        </div>
                        <div className={'grid grid-cols-2 [&>*]:text-black/45 text-[12px] py-2'}>
                            <div className={'flex justify-start text-start'}>
                                Yogurt with cucumber, tomato
                                and onion
                            </div>
                            <div className={'flex justify-end text-end'}>
                                ماست چکیده، خیار، گوجه، پياز نگینی،
                                نعنا خشک
                            </div>
                        </div>
                    </div>
                    <div className={"product mb-12 flex flex-col"}>
                        <div className={'grid grid-cols-2 text-[20px]'}>
                            <div className={'flex justify-start'}>175</div>
                            <div className={'flex justify-end'}>فسنجان بادمجان</div>
                        </div>
                        <div className={'grid grid-cols-2 [&>*]:text-black/45 text-[12px] py-2'}>
                            <div className={'flex justify-start text-start'}>
                                Chargrilled Eggplant with Fesenjan
                            </div>
                            <div className={'flex justify-end text-end'}>
                                بادمجان کبابی ، رب انار،گردو
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AppetizerAndSalads;