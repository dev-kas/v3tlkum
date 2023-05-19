// 'use client';

import DownloadButton from "./components/DownloadButton";
import { HiChevronLeft } from "react-icons/hi";

const Download = () => {
  return (
    <>
    <div
        className="w-full h-full flex justify-center items-center bg-gradient-to-tr from-indigo-700 to-blue-500 dark:from-[#111827] dark:to-[#020617] text-white">
        <div className="flex justify-center items-center lg:w-[500px] lg:h-[300px] sm:w-full sm:h-300px">
            <div className="w-full h-full lg:w-1/2 lg:px-10 lg:py-[15px] px-10 py-5 absolute flex flex-col justify-center items-center text-center">
                <div className="flex flex-col rounded-2xl overflow-hiddexn h-full w-full">
                    <span className="bg-[#18181b] flex flex-col w-full text-center py-3 px-3 rounded-md">Standalone Desktop Clients</span>
                        <DownloadButton file="https://download1475.mediafire.com/pfmeozhieuxgACK5wgqxt8VdVIjbL8TnRlke7wS6i8MDTpwfLdfFvrDdh1kPOmlvz6FxNdsgt1LeShgaYoDZc2Sx5vB_6Ab5HP5fna-E-u6KbcTenCwO0bJxx6sWri8U-0H57Wcnoaak0fB5PAPW0YYm4GTZSTDxwRN-Krt6TdHA-Or7/bptdzjn9575clk3/stable-1.0.0.zip" for="Windows" downloadName="Talkium Desktop.zip" />
                        <DownloadButton file="https://download1590.mediafire.com/s3l37myrhaagrTHhx0lqHn7sILwHh2RcsCnMf-MJ3RD-9JxF4fV6q22gR83rUixEkJApPEKYwGxYy8NM-okbJ2WkisWvpKoH9e7y1Y6OZlnt9fmbEnvy5liw9UbQNIUp91La6NsuWRAK6XpG-XS2ZY1l93uDvIsoDjcT4om1mGz9JMm8/vh9vokrmwl1wl49/stable-1.0.0.dmg" for="MacOS" downloadName="Talkium Desktop.dmg" />
                        <DownloadButton file="https://download1347.mediafire.com/okhdxl6ds12gbb3O48RBkeTDTK0z4aTv59p0BE33dre2MiPofZ_44IHa8AjcMhWo2vVlP4yirZCfAjm2CLrVGz_4MXdw8Dbw4b0-kfINLDpfrkwbcNeDR4XRxVYYoxXucLApTQwtU3XWfqGDym89bYbQ1t1hij2LCQKtuQOGTDFmxfqv/r0hflinyqzt3b6x/stable-1.0.0.zip" for="Linux" downloadName="Talkium Desktop.zip" />
                        <br />
                    <span className="bg-[#18181b] flex flex-col w-full text-center py-3 px-3 rounded-md">Mobile Clients</span>
                        <DownloadButton file="https://download1584.mediafire.com/cg7i7845ku8gUVhHji1tdgnNwKLI_wHFydaXzhgQdqSwCmo5w_MElg0F3SgJ6-MLH6eXy3LJYRp18f-gen5h70_JhmnoDlTLXSqKSVbNyb7Gnt0JzaSSxvzU4x7kN7MA_bzwlmCp92dJwa2BFpRC3sy9coywQkG1V5N033VLfQ6fG4FQ/wn50974pc27vvna/stable-1.0.0.apk" for="Android" downloadName="Talkium Mobile.apk" />
                        <DownloadButton file="/" for="iOS" downloadName="download.html" />
                </div>
                <a href="/" className="flex justify-center items-center">
                            <HiChevronLeft size={30} />
                            GO BACK
                        </a>
            </div>
        </div>
    </div>
    </>
  );
};

export default Download;
