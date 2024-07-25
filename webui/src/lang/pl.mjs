const pl = {
  globals: {
    welcome: 'Witaj w DeemixFix',
    back: 'wróć',
    loading: 'ładowanie',
    download: 'Pobierz {thing}',
    by: 'od {artist}',
    in: 'w {album}',
    download_hint: 'Pobierz',
    play_hint: 'Odtwórz',
    toggle_download_tab_hint: 'Rozszerz/Zwiń',
    clean_queue_hint: 'Wyczyść ukończone',
    cancel_queue_hint: 'Anuluj wszystkie',
    open_downloads_folder: 'Otwórz pobrane',
    cut: 'wytnij',
    copy: 'kopiuj',
    copyLink: 'kopiuj link',
    copyImageLink: 'kopiuj link obrazu',
    copyDeezerLink: 'kopiuj link deezera',
    paste: 'wklej',
    listTabs: {
      empty: '',
      all: 'wszystkie',
      top_result: 'najlepszy wynik',
      album: 'album | albumy',
      artist: 'artysta | artyści',
      single: 'singiel | single',
      title: 'tytuł | tytuły',
      track: 'utwór | utwory',
      trackN: '0 utworów | {n} utwór | {n} utworów',
      releaseN: '0 wydań | {n} wydanie | {n} wydań',
      playlist: 'playlista | playlisty',
      compile: 'kompilacja | kompilacje',
      ep: 'ep | ep',
      bundle: 'zestaw | zestawy',
      more: 'Więcej albumów',
      featured: 'Występuje w',
      spotifyPlaylist: 'playlista spotify | playlisty spotify',
      releaseDate: 'data wydania',
      error: 'błąd'
    }
  },
  about: {
    updates: {
      currentVersion: 'Obecna wersja',
      versionNotAvailable: 'N/A',
      updateAvailable: 'Nie masz najnowszej dostępnej wersji: {version}',
      deemixVersion: 'Wersja biblioteki deemix'
    },
    titles: {
      usefulLinks: 'Przydatne linki',
      bugReports: 'Zgłoszenia błędów',
      contributing: 'Wkład',
      donations: 'Dotacje',
      license: 'Licencja'
    },
    subtitles: {
      bugReports: 'Czy deemix działa inaczej niż powinien? Powiedz nam!',
      contributing: 'Chcesz pomóc w tym projekcie? Możesz to zrobić na wiele sposobów!',
      donations: 'Chcesz pomóc finansowo? Możesz nas wesprzeć!'
    },
    usesLibrary:
   'Ten program używa biblioteki <strong>deemix</strong>, której możesz użyć do stworzenia własnego interfejsu użytkownika',
    thanks: 'Podziękowania dla <strong>rtonno</strong>, <strong>uhwot</strong> i <strong>lollilol</strong> za pomoc w tym projekcie oraz dla <strong>BasCurtiz</strong> za stworzenie ikony.',
    upToDate: {
      text: 'Bądź na bieżąco z aktualizacjami dołączając do {newsChannel} na Telegramie.',
      newsChannel: 'kanału wiadomości'
    },
    officialWebsite: 'Oficjalna strona',
    officialRepo: 'Oficjalne repozytorium biblioteki',
    officialWebuiRepo: 'Oficjalne repozytorium WebUI',
    officialSubreddit: 'Oficjalny subreddit',
    newsChannel: 'Kanał wiadomości',
    questions: {
      text: 'Jeżeli masz pytania lub problemy związane z aplikacją, szukaj odpowiedzi na {telegram}. Jeżeli niczego nie znajdziesz, stwórz post na {telegram}.',
      telegram: 'Telegram'
    },
    beforeReporting: 'Przed zgłaszaniem błędu upewnij się, że masz najnowszą wersje aplikacji i to, co chcesz zgłosić jest błędem, a nie usterką z twojej strony.',
    beSure: 'Upewnij się, że błąd można odtworzyć na innych urządzeniach i <strong>NIE ZGŁASZAJ</strong> błędów, które zostały już zgłoszone',
    duplicateReports: 'Identyczne zgłoszenia błędów będą zamykane, więc zwróć na to uwagę.',
    dontOpenIssues: '<strong>NIE OTWIERAJ</strong> zgłoszeń do zadawania pytań, od tego jest subreddit.',
    newUI: {
      text: 'Jeżeli dobrze znasz Pythona, możesz spróbować stworzyć nowy interfejs dla aplikacji używając bazowej biblioteki lub naprawiać błędy w bibliotece tworząc pull request w {repo}.',
      repo: 'repozytorium'
    },
    acceptFeatures: 'Przyjmuję nowe funkcje, ale nic złożonego, co mogłoby być zaimplementowane w aplikacji, a nie w bibliotece.',
    otherLanguages: 'Jeżeli dobrze znasz inny język programowania, możesz spróbować przeportować deemix do innych języków!',
    understandingCode: 'Potrzebujesz pomocy w zrozumieniu kodu? Zapytaj waLplanet na Telegramie lub Reddicie.',
    contributeWebUI: {
      text: 'Jeżeli znasz Vue.js (JavaScript), HTML lub CSS, możesz pomóc w {webui}.',
      webui: 'WebUI'
    },
    itsFree: 'Pamiętaj, że <strong>ten projekt jest darmowy</strong> i <strong>powinieneś wspierać artystów</strong> przed twórcami aplikacji.',
    notObligated: 'Nie czuj potrzeby płacenia, i tak cię doceniam!',
    lincensedUnder: {
      text: 'Ten projekt jest chroniony licencją {gpl3}.',
      gpl3: 'GNU General Public License 3.0'
    }
  },
  charts: {
    title: 'Wykresy',
    changeCountry: 'Zmień kraj',
    download: 'Pobierz wykres'
  },
  errors: {
    title: 'Błędy dla {name}',
    ids: {
      invalidURL: 'Nierozpoznany URL',
      unsupportedURL: 'Niewspierany URL',
      ISRCnotOnDeezer: 'ISRC nie jest dostępne na Deezerze',
      notYourPrivatePlaylist: 'Nie możesz pobierać czyichś prywatnych playlist.',
      spotifyDisabled: 'Funkcje Spotify nie są poprawnie ustawione',
      trackNotOnDeezer: 'Nie znaleziono utworu na Deezerze!',
      albumNotOnDeezer: 'Nie znaleziono albumu na Deezerze!',
      notOnDeezer: 'Utwór nie jest dostępny na Deezerze!',
      notEncoded: 'Utwór nie jest jeszcze zakodowany!',
      notEncodedNoAlternative: 'Utwór nie jest jeszcze zakodowany i nie można znaleźć alternatywy!',
      wrongBitrate: 'Nie znaleziono utworu w wybranym bitrate.',
      wrongBitrateNoAlternative: 'Nie znaleziono utworu w wybranym bitrate i nie mozna znaleźć alternatywy!',
      no360RA: 'Utwór nie jest dostępny w Reality Audio 360.',
      notAvailable: 'Utwór nie jest dostępny na serwerach Deezera!',
      notAvailableNoAlternative: 'Utwór nie jest dostępny na serwerach Deezera i nie można znaleźć alternatywy!'
    }
  },
  favorites: {
    title: 'Ulubione',
    noPlaylists: 'Nie znaleziono playlist',
    noAlbums: 'Nie znaleziono ulubionych albumów',
    noArtists: 'Nie znaleziono ulubionych artystów',
    noTracks: 'Nie znaleziono ulubonych utworów'
  },
  home: {
    needTologin: 'Musisz się zalogwać do konta na Deezerze zanim zaczniesz pobierać.',
    openSettings: 'Otwórz ustawienia',
    sections: {
      popularPlaylists: 'Popularne playlisty',
      popularAlbums: 'Najpopularniejsze albumy'
    }
  },
  linkAnalyzer: {
    info: 'Możesz użyć tej sekcji, aby znaleźć więcej informacji o linku, który chcesz pobrać.',
    useful:
   'Jest to przydatne na przykład gdy chcesz pobrać jakieś utwory, które nie są dostępne w twoim kraju i chcesz wiedzieć gdzie są dostępne.',
    linkNotSupported: 'Ten link nie jest jeszcze wspierany',
    linkNotSupportedYet: 'Wygląda na to, że ten link nie jest jeszcze wspierany. Spróbuj przeanalizować inny.',
    table: {
      id: 'ID',
      isrc: 'ISRC',
      upc: 'UPC',
      duration: 'Czas',
      diskNumber: 'Numer płyty',
      trackNumber: 'Numer utworu',
      releaseDate: 'Data wydania',
      bpm: 'BPM',
      label: 'Wytwórnia',
      recordType: 'Rodzaj wydania',
      genres: 'Gatunki',
      tracklist: 'Lista utworów'
    }
  },
  search: {
    startSearching: 'Zacznij szukać!',
    description: 'Możesz wyszukać utwór, album, artystę, playlistę... wszystko! Możesz też wkleić link do Deezera',
    fans: '{n} fanów',
    noResults: 'Brak wyników',
    noResultsTrack: 'Nie znaleziono utworów',
    noResultsAlbum: 'Nie znaleziono albumów',
    noResultsArtist: 'Nie znaleziono artystów',
    noResultsPlaylist: 'Nie znaleziono playlist'
  },
  searchbar: 'Szukaj czego chcesz (lub wklej link)',
  downloads: 'pobrane',
  toasts: {
    restoringQueue: 'Przywracanie kolejki pobierania...',
    queueRestored: 'Przywrócono kolejkę pobierania!',
    addedToQueue: 'Dodano {item} do kolejki',
    addedMoreToQueue: 'Dodano {n} przedmiotów do kolejki',
    alreadyInQueue: '{item} jest już w kolejce!',
    finishDownload: 'Ukończono pobieranie {item}.',
    allDownloaded: 'Pobrano wszystkie!',
    refreshFavs: 'Ukończono odświeżanie!',
    loggingIn: 'Logowanie...',
    loggedIn: 'Zalogowano',
    alreadyLogged: 'Już zalogowano',
    loginFailed: 'Nie można zalogować',
    loggedOut: 'Wylogowano',
    cancellingCurrentItem: 'Anulowanie przedmiotu.',
    currentItemCancelled: 'Anulowano przedmiot.',
    startAddingArtist: 'Dodawanie {artist} albumów do kolejki',
    finishAddingArtist: 'Dodano {artist} albumów do kolejki',
    startConvertingSpotifyPlaylist: 'Konwertowanie utworów Spotify na Deezer',
    finishConvertingSpotifyPlaylist: 'Przekonwertowano playlistę Spotify',
    loginNeededToDownload: 'Musisz się zalogować, aby pobierać utwory!'
  },
  settings: {
    title: 'Ustawienia',
    language: 'Język',
    login: {
      title: 'Logowanie',
      loggedIn: 'Zalogowano jako {username}',
      arl: {
        question: 'Jak zdobyć swój własny ARL?',
        update: 'Zakualizuj ARL'
      },
      logout: 'Wyloguj',
      login: 'Zaloguj przez deezer.com'
    },
    appearance: {
      title: 'Wygląd',
      slimDownloadTab: 'Cienka karta pobranych'
    },
    downloadPath: {
      title: 'Ścieżka pobierania'
    },
    templates: {
      title: 'Szablony',
      tracknameTemplate: 'Szablon utworu',
      albumTracknameTemplate: 'Szablon utworu z albumu',
      playlistTracknameTemplate: 'Szablon utworu z playlisy'
    },
    folders: {
      title: 'Foldery',
      createPlaylistFolder: 'Utwórz foldery dla playlist',
      playlistNameTemplate: 'Szablon folderu playlisty',
      createArtistFolder: 'Utwórz foldery dla artystów',
      artistNameTemplate: 'Szablon folderu artysty',
      createAlbumFolder: 'Utwórz foldery dla albumów',
      albumNameTemplate: 'Szablon folderu albumu',
      createCDFolder: 'Utwórz foldery dla płyt',
      createStructurePlaylist: 'Utwórz strukturę folderów dla playlist',
      createSingleFolder: 'Utwórz strukturę folderów dla singli'
    },
    trackTitles: {
      title: 'Tytuły utworow',
      padTracks: 'Wypchaj utwory',
      paddingSize: 'Rozmiar wypchania',
      illegalCharacterReplacer: 'Zamiennik niedozwolonych znaków'
    },
    downloads: {
      title: 'Pobrane',
      queueConcurrency: 'Równoległe pobieranie',
      maxBitrate: {
        title: 'Bitrate',
        9: 'FLAC 1411kbps',
        3: 'MP3 320kbps',
        1: 'MP3 128kbps'
      },
      overwriteFile: {
        title: 'Nadpisywać pliki?',
        y: 'Tak',
        n: 'Nie',
        t: 'Tylko tagi',
        b: 'Nie, dodaj numer do drugiego pliku',
        e: 'Nie, nie patrz na rozszerzenia'
      },
      fallbackBitrate: 'Rezerwowy bitrate',
      fallbackSearch: 'Rezerwowe wyszukiwanie',
      logErrors: 'Utwórz plik dziennika błędów',
      logSearched: 'Utwórz plik dziennika wyszukiwanych utworów',
      createM3U8File: 'Utwórz plik playlisty',
      syncedLyrics: 'Utwórz plik .lrc (synchronizowany tekst)',
      playlistFilenameTemplate: 'Szablon pliku playlisty',
      saveDownloadQueue: 'Zapisz kolejkę pobierania przy zamykaniu aplikacji'
    },
    covers: {
      title: 'Okładki albumów',
      saveArtwork: 'Zapisz okładki',
      coverImageTemplate: 'Szablon nazwy okładki',
      saveArtworkArtist: 'Zapisz zdjęcie artysty',
      artistImageTemplate: 'Szablon zdjęcia artysty',
      localArtworkSize: 'Rozmiar lokalnej okładki',
      embeddedArtworkSize: 'Rozmiar osadzonej okładki',
      localArtworkFormat: {
        title: 'W jakim formacie ma zostać zapisana okładka?',
        jpg: 'Plik JPEG',
        png: 'Plik PNG',
        both: 'Pliki JPEG i PNG'
      },
      jpegImageQuality: 'Jakość JPEG',
      embeddedArtworkPNG: 'Zapisz osadzoną okładkę jako PNG',
      embeddedPNGWarning: 'PNG nie jest oficjalnie wspierane przez Deezer i może powodować błędy',
      imageSizeWarning: 'Wszystko powyżej x1200 nie jest oficjalnie używane przez Deezera, więc mogą wystąpić problemy.'
    },
    tags: {
      head: 'Które tagi zapisać',
      title: 'Tytuł',
      artist: 'Artysta',
      album: 'Album',
      cover: 'Okładka',
      trackNumber: 'Numer utworu',
      trackTotal: 'Liczba utworów',
      discNumber: 'Numer płyty',
      discTotal: 'Liczba płyt',
      albumArtist: 'Album Artist',
      genre: 'Gatunek',
      year: 'Rok',
      date: 'Data',
      explicit: 'Wulgarny tekst',
      isrc: 'ISRC',
      length: 'Długość',
      barcode: 'Kod kreskowy albumu (UPC)',
      bpm: 'BPM',
      replayGain: 'Replay Gain',
      label: 'Wytwórnia',
      lyrics: 'Niezsynchronizowany tekst',
      syncedLyrics: 'Zsynchronizowany tekst',
      copyright: 'Prawa autorskie',
      composer: 'Kompozytor',
      involvedPeople: 'Zaangażowane osoby'
    },
    other: {
      title: 'Inne',
      savePlaylistAsCompilation: 'Zapisz playlisty jako kompilacje',
      useNullSeparator: 'Użyj separatora null',
      saveID3v1: 'Zapisz ID3v1',
      multiArtistSeparator: {
        title: 'Jak oddzielić artystów?',
        nothing: 'Zapisz tylko głównego artystę',
        default: 'Standardowa specyfikacja',
        andFeat: '& i feat.',
        using: 'Używa "{separator}"'
      },
      singleAlbumArtist: 'Zapisz tylko głównego autora albumu',
      albumVariousArtists: 'Zostaw "Various Artists" w autorach albumu',
      removeAlbumVersion: 'Usuń "Album Version" z tytułu utworu',
      removeDuplicateArtists: 'Usuń kombinacje artystów',
      dateFormat: {
        title: 'Format daty dla plików FLAC',
        year: 'YYYY',
        month: 'MM',
        day: 'DD'
      },
      featuredToTitle: {
        title: 'Co zrobić z dodatkowymi artystami?',
        0: 'Nic',
        1: 'Usuń z tytułu',
        3: 'Usuń z tytułu i tytułu albumu',
        2: 'Przenieś do tytułu'
      },
      titleCasing: 'Rozmiar liter tytułu',
      artistCasing: 'Rozmiar liter artysty',
      casing: {
        nothing: 'Zostaw',
        lower: 'małe litery',
        upper: 'DUŻE LITERY',
        start: 'Na Początku Każdego Słowa',
        sentence: 'Jak w zdaniu'
      },
      previewVolume: 'Głośność podglądu',
      executeCommand: {
        title: 'Polecenie do wykonania po pobraniu',
        description: 'Zostaw puste, aby nic nie robić'
      }
    },
    spotify: {
      title: 'Funkcje Spotify',
      clientID: 'Spotify ClientID',
      clientSecret: 'Spotify Client Secret',
      username: 'Nazwa użytkownika',
      question: 'Jak włączyć funkcje Spotify?'
    },
    reset: 'Przywróć domyślne',
    save: 'Zapisz',
    toasts: {
      init: 'Załadowano ustawienia!',
      update: 'Zaktualizowano ustawienia!',
      ARLcopied: 'Skopiowano ARL do schowka'
    }
  },
  sidebar: {
    home: 'strona główna',
    search: 'szukaj',
    charts: 'wykresy',
    favorites: 'ulubione',
    linkAnalyzer: 'analiza linków',
    settings: 'ustawienia',
    about: 'informacje'
  },
  tracklist: {
    downloadSelection: 'Pobierz wybrane'
  }
}

export default pl
