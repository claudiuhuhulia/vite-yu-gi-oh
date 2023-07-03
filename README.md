# Pokévuex

--

- Creo il markup statico all'interno di **App** e un nuovo componente **AppMain** che sara il main del progetto.

- importo **AppMain** e lo dichiaro all'interno di _components_.
- Creo il componente **PokemonList** che utilizzeremo come lista dei pokemon.
  - importiamo _axios_ per successivamente poter fare le relative chiamate alle _API_.
  - Creo la costante _endpoint_ che sara il percorso relativo all'_API_.
  - All'interno di data creo l'array vuoto _pokemon_ nel quale si aggiungeranno gli oggetti relativi alle chiamate _API_.
  - Le chiamate _API_ dovranno avvenire all'apertura della pagina, quindi dentro _created_ andrò a scrivere la relativa function che farà le chiamate _API_.
  - Creo un _v-for_ che girerà sui pokemon.
- Creo il componente dedicato alla singola card che conterrà i dati ricevuti dall'api dell'oggetto _pokemon_ che gira sul v-for precedentemente creato.
  - Preparo per **props** che riceveranno i dati che andranno inseriti nella card.
