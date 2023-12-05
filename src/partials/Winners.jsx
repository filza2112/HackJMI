import React, { useContext } from "react";
import { DarkThemeContext } from "../App";

const PastWinners = () => {
	const { isDarkTheme } = useContext(DarkThemeContext);

	return (
        <section className="relative" id="winners">
        <div className="max-w-3xl mx-auto text-center py-16 md:py-20" data-aos="zoom-out">
        <h1 className="dark:text-white h2 mb-4" data-aos="zoom-in">Past Winners</h1>
      </div>
      <hr className="border border-gray-300 w-3/4 mx-auto my-2" />
    </section>
	);
}

export default PastWinners;
