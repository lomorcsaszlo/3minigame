🎮 Tetris Játék – README 🎮
📝 Leírás
Ez a projekt egy egyszerű Tetris játéknak indult, de a fejlesztés során a klasszikus Tetris mechanika helyett egy blokkos megoldásra tértem át. A játékban különböző formák (Z, T, O és J) generálódnak véletlenszerűen, és leereszkednek a rácson. A cél a sorok kitöltése és törlése, miközben pontokat gyűjtesz.

🌟 Főbb jellemzők:
Dinamikus rács: A játékmezőt div elemek képviselik, amelyeket stílusozunk, hogy jól látható határoló vonalaik legyenek.
Formák generálása: A játék véletlenszerűen generál Z, T, O, és J formákat, amelyek leereszkednek a rácson.
Sor törlés: Ha egy sor teljesen megtelik, azt a játék automatikusan eltávolítja, és pontokat ad a játékosnak.
Mozgás: A játékos a bal és jobb nyílbillentyűkkel mozgathatja a formákat, és a Spacebillentyűvel gyorsíthatja azok esését.
🗂️ Szerkezet
Rács: A rács 200 div elemből épül fel, amelyek a játékmezőt képviselik. A játék folyamatosan ellenőrzi, hogy van-e teljes sor, és ha igen, akkor azt törli.
Formák: Az alakzatok div elemek segítségével jelennek meg a játéktéren, és amikor elérik a rácsot, azok fekete színt kapnak.
Játékirányítás: A játékos a nyílbillentyűkkel mozgathatja a formákat balra vagy jobbra, a Spacebillentyűvel pedig gyorsíthatja a leesést.
Pontozás: A játékos pontszámot szerez, amikor sorokat töröl. Minden törölt sor után 25 pontot kap.
🚧 Fejlesztési állapot és problémák
🔧 Kezdeti Tetris koncepció
A projekt kezdetben egy klasszikus Tetris játék fejlesztésére indult, ahol a formák leesnek és forognak, hogy kitöltsék a rácsot. Azonban a fejlesztés során a koncepció egy blokkos megoldásra módosult, ahol:

A formák nem forognak (a klasszikus Tetris forgatási mechanizmusa helyett).
A játékos csak balra és jobbra mozgathatja a formákat, valamint leeshetnek a rácsra.
⚠️ Problémák a kezdeti megoldással
Az eredeti ötlethez képest a következő problémák merültek fel:

Nincs forgatás: A forgatás hiánya miatt a játékosok nem tudják hatékonyan elhelyezni a formákat, így a játékmenet nehezebbé válik a későbbiekben.
Rács kezelése: A blokkos megoldás próbálja pótolni a forgatás hiányát, de nem biztosít annyi lehetőséget és stratégiát a játékosok számára.
❌ Miért nem ideális a blokkos megoldás
Bár a blokkos megoldás működik, nem tükrözi teljes mértékben a klasszikus Tetris élményt:

Forgatás hiánya: A játékosok nem tudják kihasználni a rács minden egyes lehetőségét, így a játékmenet kevésbé rugalmas.
Korlátozott stratégiai lehetőségek: A forgatás lehetőségének hiánya miatt a játék nem ad elegendő lehetőséget a stratégiai döntésekhez.
Ezáltal a játékosok nem élhetik át azt a dinamikus kihívást, amit a klasszikus Tetris biztosít.

🔧 Jövőbeli fejlesztések
Forma forgatás: A formák forgatásának hozzáadása nagyban javítaná a játék élményét és kihívását.
Finomított rács kezelés: A sorok törlésének és a formák kezelésének optimalizálása gördülékenyebb játékmenetet biztosítana.
🎮 Hogyan kell játszani?
Nyílbillentyűk: A bal és jobb nyíllal mozgathatod a formákat.
Spacebillentyű: Nyomd le a Spacebillentyűt, hogy gyorsan leejtsd a formát.
Egérkattintás: Az egérrel is ledobhatod a formát.
🚀 A játék indítása
Kattints a "Start" gombra a játék elindításához.
A játék automatikusan elindul, és elkezdheted használni a vezérlőket.
🛠️ Telepítés és futtatás
Klónozd a repository-t vagy töltsd le a kódot.
Nyisd meg a HTML fájlt a böngészőben.
Élvezd a játékot!
