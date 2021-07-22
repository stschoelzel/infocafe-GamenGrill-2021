import React from "react";
import { Parchment } from "../atoms/Parchment";
import { H1 } from "../atoms/H1";
import { Map } from "../molecules/Map";
import { Riddle } from "../organisms/Riddle";
import { Divider } from "../atoms/Divider";
import { H4 } from "../atoms/H4";

export const Woche1 = () => {
  return (
    <Parchment>
      <H1>Woche 1 -1 Wasser</H1>

      <img
        src="img/water.jpg"
        style={{
          height: "100%",
          width: "100%",
        }}
      />
      <Riddle index={1} chapter={1} prolog>
        Ein sonniger Tag, erfrischende Meeresbrisen wehen durch das Deck und ihr
        blickt zum Horizont, wo der klare Himmel auf das tiefblaue Wasser
        trifft. Tagträumend genießt ihr diesen wundervollen Anblick von Freiheit
        und lauscht dabei den rauschenden Klängen des Meeres.
        <br />
        <br />
        Gedankenversunken bemerkt ihr nicht, dass euer Segelschiff zum
        Stillstand geraten ist. Der Wind hat aufgehört zu wehen, das Meer hat
        aufgehört Wellen zu schlagen. Ein leichter Nebel kommt langsam auf und
        umhüllt das Schiff. Euch wird plötzlich klar, dass hier etwas nicht
        stimmt. Doch wisst ihr auch nicht, wie ihr aus dieser Situation
        herauskommt, denn der Nebel hat sich mittlerweile mehr und mehr
        verdichtet, sodass ihr eure Umgebung nicht mehr sehen könnt. Ihr stellt
        fest, dass euer Schiff im Nebel in eine bestimmte Richtung getrieben
        wird.
        <br />
        <br />
        Ohne zu wissen, was hier gerade geschieht, könnt ihr nichts anderes tun,
        als zu warten und zu hoffen, dass es zu keinem Unheil kommt. Nach
        einiger Zeit nehmt ihr in der Ferne des Nebels eine riesige schwarze
        Silhouette wahr, die immer und immer größer wird. Es scheint so, als ob
        ihr euch auf diesen Schatten langsam zubewegt. Ist es ein Monster? Ein
        Seeungeheuer? Besorgt versucht ihr zu erkennen, um was es sich dabei
        handeln könnte. Und siehe da, langsam lassen sich Konturen und Farben
        erkennen. Es handelt sich um eine Bucht und ihr steuert auf einen Strand
        zu! Etwas erleichtert freut ihr euch darüber, dass Land in Sicht ist.
        Doch wisst ihr immer noch nicht, wo ihr überhaupt seid.
        <br />
        <br />
        Das Schiff strandet an der Bucht. Ihr springt auf’s Land, doch erkennt
        ihr durch den dichten Nebel weit und breit nur Sand und vereinzelte
        Gesteine. Etwas orientierungslos versucht ihr euch in der neuen Gegend
        zurecht zu finden und nach Hinweisen zu suchen. Und nach einiger Zeit
        Herumirren werdet ihr tatsächlich fündig. Ihr steht vor einer Steintafel
        worauf etwas geschrieben steht. Zudem weist die Tafel ein Relief auf,
        welches anscheinend etwas darstellen sollen. Was könnte es bloß sein?
      </Riddle>
      <Riddle
        index={1}
        chapter={1}
        heading="Gestrandet im Nebel"
        question="Welchen Ort zeigt dir die Steintafel?"
        answer="Juist"
      >
        Auf der Steintafel steht etwas geschrieben:
        <br />
        <br />
        Im Norden baden die sieben Schwestern im Wattenmeer. Eine
        unterschiedlicher als die andere, besitzt jede ihren ganz eigenen
        Charme. Doch gesucht ist der Name von der Schwester, die am längsten
        ist.
        <br />
        <br />
        Ihr erkennt ein Relief, doch was soll dieses wohl darstellen? Handelt es
        sich dabei um einen Hinweis?
        <br />
        <br />
        <Map src="img/karte_1-1.jpg" />
        <br />
        <br />
        Die Form kommt euch etwas bekannt vor... Ganz dunkel erinnert ihr euch,
        dass ihr dieses Muster schon mal in der Welt, in der ihr lebt, gesehen
        habt. Und der Ort, wo die sieben Schwestern angeblich schwimmen, ist
        euch auch nicht ganz unbekannt... Vielleicht hilft ja ein Blick auf eine
        Karte?
      </Riddle>
      <Riddle index={2} chapter={1} prolog>
        Nachdem ihr vor der Steintafel das richtige Lösungswort ausgesprochen
        habt, beginnt ein Teil des Reliefs zu leuchten. Neugierig berührt ihr
        die leuchtende Stelle und plötzlich blitzt ein gleißendes Licht auf,
        welches euch kurzzeitig blendet. Langsam beginnt ihr wieder klarer zu
        sehen und ihr stellt fest, dass der Nebel komplett verschwunden ist.
        <br />
        Ihr blickt um euch herum und findet euch auf einer wunderschönen Bucht
        wieder, umringt von majestätischen Hügeln. Das Meer schimmert so blau
        wie der Himmel und die Sonne strahlt wärmend auf euch herab. Anscheinend
        seit ihr auf einer riesengroßen Insel gelandet. Ihr erkundet die Gegend
        und entdeckt einen Weg, der über einen Hügel in die Insel rein führt.
        Ihr folgt diesem Weg in der Hoffnung, jemanden zu finden, der euch
        helfen kann.
        <br />
        <br />
        Als ihr euch mitten auf dem Hügel befindet, könnt ihr über eine riesige
        und wunderschöne Landschaft blicken. Ihr seht in der Ferne einen großen
        See und am Rande des Sees eine kleine Siedlung in der Nähe. Vielleicht
        begegnet ihr dort Leute, die euch helfen könnten? Ihr macht euch auf dem
        Weg zur Siedlung.
        <br />
        <br />
        Als ihr in der Siedlung ankommt, stellt ihr fest, dass sie von
        Fischmenschen bewohnt wird. Einige von denen bemerken euch und rufen
        etwas misstrauisch: “Hey! Wer seid ihr? Was wollt ihr hier?” Ihr
        versucht eure Situation zu schildern, dass ihr nicht wisst, wo ihr seid
        und versucht nach Hilfe sucht. Noch etwas verunsichert antwortet einer
        der Fischmenschen: “Okay. Es sieht wohl so aus, als ob ihr in einer
        komplizierten Lage steckt. Vielleicht kann euch unser Ältester
        weiterhelfen.” Er zeigt auf eine Hütte im hinteren Teil der Siedlung,
        dort sollt ihr hin.
        <br />
        <br />
        Bei der Hütte angekommen klopft ihr gegen die Tür. Es macht euch ein
        älterer Fischmensch auf: “Ihr seid also die Fremden, die hier in unserer
        Siedlung umher streifen. Es hat sich schnell herumgesprochen. Ihr sucht
        meine Hilfe?” Ihr erklärt dem Ältesten, was passiert ist. Er entgegnet
        euch: “Ich verstehe eure Situation. Damit ich euch weiterhelfen kann,
        müsst ihr erst ein Test bestehen. Bitte entschuldigt mein Misstrauen,
        die Insel steht momentan unter einem schlechten Omen. Ich muss
        sichergehen können, dass die Siedlung euch vertrauen kann.” Ihr willigt
        darauf ein.
      </Riddle>
      <Riddle
        index={2}
        chapter={1}
        heading="Eine Siedlung voller Fische"
        question="Wo erwartet euch der Älteste der Fischmenschen?"
        answer="Atlantis"
      >
        Der Älteste der Fischmenschen schickt euch auf eine kleine Wanderung.
        Dabei bekommt ihr eine Karte mit einer Wegbeschreibung:
        <br />
        <Map src="img/karte_1-2.jpg" />
        <br />
        Ihr startet am West Clubhaus im Südwesten. Von dort wandert ihr nach
        Süden bis zur 804. Straße. Der Straße folgt ihr nach Osten, bis ihr das
        Tal der Sonne erreicht. Vom Tal der Sonne wandert ihr Richtung
        Nordosten, bis zu den Flüsternden Kiefern. Dann biegt ihr dort wieder
        Richtung Südosten ab, bis hin zur Hochschule. Von der Schule aus folgt
        ihr dem Fluss Richtung Osten bis zur 95. Straße. Auf dieser Straße
        wandert ihr nach Norden, so lange bis ihr auf die Südwinde stößt. Von
        dort aus biegt ihr nach Westen und kommt an bei der begrünten Verlorenen
        Stadt an. Dort begebt ihr euch auf der Suche nach dem Antiken Reich, wo
        ich auf euch warte.
      </Riddle>
      <Riddle
        index={3}
        chapter={1}
        heading="Tempel des Konsums"
        question="Wie lautet das Lösungswort?"
        answer="Buecherei"
      >
        Ihr wendet euch von den die Geistern der Vergangenheit ab und verlasst
        den Friedhof Richtung Norden. Schnell habt ihr heraus, dass es sich bei
        der Lösung um die Koordinaten eines Ortes in unmittelbarer Nähe handelt.
        Ihr wart schon öfter dort, am Tempel des Konsums. Ob dies der richtige
        Ort sein kann, um neues Wissen zu erlangen? Ihr wundert euch, doch
        hinterfragt vorerst nicht, was die Ältesten euch aufgetragen haben. Je
        näher ihr der Innenstadt kommt, desto belebter werden die Straßen.
        Magische Klapperkisten rollen über den Asphalt und weisen euch den Weg.
        Ihr merkt, dass die Giftwolke hier wieder dichter wird, umso näher die
        Häuser aneinander stehen und umso mehr die Menschen in Kontakt
        miteinander sind. Zur Sicherheit setzt auch ihr eure Masken auf und
        haltet etwas Abstand, ehe ihr den Tempel des Konsums betretet. Kaum
        haben sich die gläsernen Türen hinter euch geschlossen bildet sich in
        euren Köpfen ein neues Rätsel – der Schlüssel zu verborgenem Wissen?
        <Divider />
        Willkommen im Tempel des Konsums!
        <br />
        <br />
        <H4 style={{ fontSize: "1rem" }}>
          40 - 99 - 10 - 107 - 3 - 133 - 80 - 66 - 138
        </H4>
        Hinter diesen Ziffern verbergen sich Kaufleute und Ladengeschäfte. Die
        Initialen der Geschäftsnamen erscheinen euch auffällig…
      </Riddle>
      <Riddle index={4} chapter={1} heading="Das Reich der Bücher">
        Ihr seid euch sicher: Um das Reich der Bücher zu betreten, müsst ihr den
        Tempel des Konsums wieder verlassen. Der Ort, zu dem es euch zieht, sind
        die Hallen des Wissens in unmittelbarer Nähe. Wissen gibt es hier nicht
        zu kaufen, sondern wird nur an ausgewählte Mitglieder verliehen. Vor Ort
        müsst ihr den Schlüssel suchen, der euch den Zugang zur nächsten Woche
        ermöglicht. Dafür müsst ihr die Hallen des Wissens nicht betreten, denn
        ihr könnt es von außen finden. Jedoch kann ein Besuch in den Hallen des
        Wissen stets sehr lehrreich sein.
        <br />
        <br />
        Wenn ihr die Smaragd-Rune gefunden habt analysiert sie mit eurem
        Zaubergerät, um die Aufgabe zu lösen.
      </Riddle>
    </Parchment>
  );
};
