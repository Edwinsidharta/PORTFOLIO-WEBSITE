"use client"

import {useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

import Greeting from "@/app/component/greeting/greeting";
import TamagotchiAr from "@/app/component/work/tamagotchi-ar/tamagotchi-ar";
import Anebantu from "@/app/component/work/anebantu/anebantu";

export default function Home() {
    useEffect(() => {
        AOS.init({
            easing: 'ease-out-cubic',
            once: true,
            offset: 50,
            delay: 50,
        });
    });
    return (
        <main className="flex flex-col items-center bg-white">
            <Greeting/>
            <Anebantu/>
            <TamagotchiAr/>
        </main>
    )
}
