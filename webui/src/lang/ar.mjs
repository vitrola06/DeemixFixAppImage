const ar = {
  globals: {
    welcome: 'مرحبأ بك في ديمكس',
    back: 'رجوع',
    loading: 'جار التحميل',
    download: 'تحميل {thing}',
    by: 'بواسطة {artist}',
    in: 'في {album}',
    download_hint: 'تحميل',
    play_hint: 'تشغيل',
    toggle_download_tab_hint: 'عرض/اخفاء',
    clean_queue_hint: 'تم المسح',
    cancel_queue_hint: 'الغاء الكل',
    listTabs: {
      empty: '',
      all: 'الكل',
      top_result: 'افضل النتائج',
      album: 'البوم | البومات',
      artist: 'فنان | فنانون',
      single: 'اغنية | اغنية',
      title: 'عنوان | عناوين',
      track: 'مقطع | مقاطع',
      trackN: '0 مقاطع | {n} مقطع | {n} مقطع',
      releaseN: '0 اصدار | {n} اصدار | {n} اصدار',
      playlist: 'قائمة تشغيل | قوائم تشغيل',
      compile: 'مجموعة | مجموعات',
      ep: 'ep | eps',
      spotifyPlaylist: 'قائمة تشغيل سبوتفاي | قوائم تشغيل سبوتفاي',
      releaseDate: 'تاريخ الاصدار',
      error: 'خطأ'
    }
  },
  about: {
    titles: {
      usefulLinks: 'روابط مهمة',
      bugReports: 'ابلاغ عن مشكلة',
      contributing: 'مساهمة',
      donations: 'التبرع',
      license: 'الرخصة'
    },
    subtitles: {
      bugReports: 'هل هناك شيء لا يعمل في ديمكس؟ أخبرنا',
      contributing: 'تريد المساهمة في هذا المشروع؟ يمكنك القيام بذلك بعدة طرق',
      donations: 'تريد المساهمة مادياً؟ يمكنك التبرع'
    },
    usesLibrary: 'هذا البرنامج يستخدم مكتبة <strong>ديمكس</strong> والتي يمكنك استخدامها لإنشاء واجهة مستخدم خاصة بك لديمكس.',
    thanks: 'شكرا لـ <strong>rtonno</strong>, و <strong>uhwot</strong> و <strong>lollilol</strong> لمساعدتي في هذا المشروع و لـ <strong>BasCurtiz</strong> لصنع الايقونة.',
    officialWebsite: 'الموقع الرسمي',
    officialRepo: 'مستودع المكتبة الرسمي',
    officialWebuiRepo: 'مستودع واجهة الويب الرسمي',
    officialSubreddit: 'السب ريدت الرسمي',
    newsChannel: 'قناة الاخبار',
    beforeReporting: 'قبل ان تبلغ عن خطأ، تأكد من أنك تشغل أحدث إصدار من التطبيق وأن ما تريد الإبلاغ عنه هو في الواقع خطأ وليس مشكلة من جهتك.',
    beSure: 'تأكد من أن الخطأ يمكن إعادة إنتاجه على أجهزة أخرى و ايضاً <strong>لا</strong> تبلغ علة خطأ تم التبليغ عنه سابقاً.',
    duplicateReports: 'سيتم إغلاق تقارير الأخطاء المكررة ، لذلك ترقب ذلك.',
    dontOpenIssues: '<strong>DO NOT</strong> open issues for asking questions, there is a subreddit for that.',
    acceptFeatures: 'أقبل اقتراحات الميزات أيضًا ، ولكن لا أشياء معقدة ، فقط اشياء يمكنني تنفيذها مباشرة في التطبيق وليس في المكتبة.',
    otherLanguages: 'إذا كنت تجيد لغة برمجة أخرى ، يمكنك محاولة تحويل ديمكس إلى لغات برمجة أخرى!',
    understandingCode: 'أنت بحاجة إلى مساعدة في فهم الكود؟ فقط اتصل بـ waLplanet على تيليكرام او ريديت.',
    itsFree: 'يجب ان تتذكر ان <strong>هذا هو مشروع مجاني</strong> <strong>و عليك دعم الفنانين المفضلين لك قبل ان تدعم مطورين البرنامج</strong>.',
    notObligated: 'لا تشعر بالالتزام بالتبرع ، لكني أقدر ذلك على أي حال!'
  },
  charts: {
    title: 'قائمة الجداول',
    changeCountry: 'تغيير الدولة',
    download: 'تحميل قائمة الجدول'
  },
  errors: {
    title: 'خطأ في {name}',
    ids: {
      invalidURL: 'الرابط غير صحيح',
      unsupportedURL: 'الرابط غير متاح حتى الانً',
      ISRCnotOnDeezer: 'رمز المقطع غير متوفر في ديزر',
      notYourPrivatePlaylist: 'لا يمكنك تحميل قوائم التشغيل الخاصة و المخفية.',
      spotifyDisabled: 'لم يتم اعداد ميزات سبوتفاي بالطرقة الصحيحة .',
      trackNotOnDeezer: 'المقطع لا يوجد في ديزر!',
      albumNotOnDeezer: 'الالبوم لا يوجد في ديزر!',
      notOnDeezer: 'المقطع لا يوجد في ديزر!',
      notEncoded: 'لم يتم تشفير المقطع حتى الانً!',
      notEncodedNoAlternative: 'لم يتم تشفير المقطع حتى الآن ولم يتم العثور على بديل!',
      wrongBitrate: 'لم يتم العثور على المقطع في الدقة المطلوبة.',
      wrongBitrateNoAlternative: 'لم يتم العثور على المقطع في الدقة المطلوبة و لا توجد دقة بديلة!',
      no360RA: 'المقطع غير متوفر في Reality Audio 360.',
      notAvailable: 'المقطع غير متوفر في سيرفرات ديزر!',
      notAvailableNoAlternative: 'المقطع غير متوفر في سيرفرات ديزر و لا يوجد بديل حتى الان!'
    }
  },
  favorites: {
    title: 'المفضلات',
    noPlaylists: 'لا يوجد قوائم تشغيل',
    noAlbums: 'لم لا توجد البومات مفضلة',
    noArtists: 'لا يوجد فنانين مفضلين',
    noTracks: 'لا توجد مقاطع مفضلة'
  },
  home: {
    needTologin: 'يجب عليك التسجيل في حساب ديزر قبل بدء التحميل.',
    openSettings: 'فتح الاعدادات',
    sections: {
      popularPlaylists: 'قوائم تشغيل مشهورة',
      popularAlbums: 'اكثر الالبومات سماعأ'
    }
  },
  linkAnalyzer: {
    info: 'يمكنك استخدام هذا القسم للعثور على مزيد من المعلومات حول الرابط الذي تحاول تنزيله.',
    useful: ' كمثال هذا مفيد إذا كنت تحاول تنزيل بعض المقاطع الغير المتاحة في بلدك وتريد معرفة مكان توفرها .',
    linkNotSupported: 'هذا الرابط غير معتمد حتى الآن',
    linkNotSupportedYet: 'يبدو أن هذا الرابط غير معتمد حتى الآن ، حاول تحليل رابط آخر.',
    table: {
      id: 'ID',
      isrc: 'ISRC',
      upc: 'UPC',
      duration: 'المدة الزمنية',
      diskNumber: 'رقم القرص',
      trackNumber: 'رقم المقطع',
      releaseDate: 'تاريخ الاصدار',
      bpm: 'BPM',
      label: 'Label',
      recordType: 'نوع التسجيل',
      genres: 'النوع الفني',
      tracklist: 'قائمة المقاطع'
    }
  },
  search: {
    startSearching: 'ابدأ البحث!',
    description: 'يمكنك البحث عن مقطع ، ألبوم كامل ، فنان ، قائمة تشغيل .... كل شيء! يمكنك أيضًا لصق رابط ديزر',
    fans: '{n} متابعون',
    noResults: 'لا يوجد نتائج',
    noResultsTrack: 'لم يتم العثور على مقاطع',
    noResultsAlbum: 'لم يتم العثور على البومات',
    noResultsArtist: 'لم يتم العثور على فنانين',
    noResultsPlaylist: 'لم يتم العثور على قوائم تشغيل'
  },
  searchbar: 'ابحث عن أي شيء تريده (أو الصق رابط)',
  downloads: 'التحميلات',
  toasts: {
    addedToQueue: '{item} تمت إلأضافة إلى قائمة الانتظار',
    alreadyInQueue: '{item} حالياً  في قائمة الانتظار!',
    finishDownload: '{item} انتهى تحميل.',
    allDownloaded: 'اكتملت جميع التنزيلات!',
    refreshFavs: 'اكتمل التحديث!',
    loggingIn: 'جار تسجيل الدخول...',
    loggedIn: 'تم تسجيل الدخول',
    alreadyLogged: 'تم تسجيل الدخول بالفعل',
    loginFailed: 'تعذر تسجيل الدخول',
    loggedOut: 'تم تسجيل الخروج',
    cancellingCurrentItem: 'جار الغاء العنصر الحالي.',
    currentItemCancelled: 'تم الغاء العنصر الحالي.',
    startAddingArtist: 'جار اضافة {artist} البوم الى قائمة الانتضار',
    finishAddingArtist: 'تم اضافة {artist} البوم الى قائمة الانتضار',
    startConvertingSpotifyPlaylist: 'جار تحويل مقاطع سبوتفاي الى مقاطع ديزر',
    finishConvertingSpotifyPlaylist: 'تم تحويل قائمة تشغيل سبوتفاي',
    loginNeededToDownload: 'يجب عليك تسجيل الدخول لتحميل المقاطع!'
  },
  settings: {
    title: 'الاعدادات',
    language: 'لغة',
    login: {
      title: 'تسجيل الدخول',
      loggedIn: 'تم تسجيل الدخول كـ {username}',
      arl: {
        question: 'كيفية الحصول علة ARL',
        update: 'ارفع ال ARL'
      },
      logout: 'تسجيل الخروج'
    },
    appearance: {
      title: 'المظهر',
      slimDownloadTab: 'لوحة التحميل الرفيعة'
    },
    downloadPath: {
      title: 'مسار التحميل'
    },
    templates: {
      title: 'القوالب',
      tracknameTemplate: 'قالب اسم المقطع',
      albumTracknameTemplate: 'قالب مقطع الالبوم',
      playlistTracknameTemplate: 'قالب مقطع قائمة التشغيل'
    },
    folders: {
      title: 'الملفات',
      createPlaylistFolder: 'اصنع ملف لقائمة التشغيل',
      playlistNameTemplate: 'قالب ملف قائمة التشغيل',
      createArtistFolder: 'اصنع ملف للفنان',
      artistNameTemplate: 'قالب ملف الفنان',
      createAlbumFolder: 'اصنع ملف للالبوم',
      albumNameTemplate: 'قالب ملف الالبوم',
      createCDFolder: 'اصنع ملف للاقراص',
      createStructurePlaylist: 'اصنع هيكل مجلدات لقوائم التشغيل',
      createSingleFolder: 'اصنع هيكل مجلدات لالبومات ذات الاغنية الواحدة'
    },
    trackTitles: {
      title: 'عنوان المقطع',
      padTracks: 'Pad tracks',
      paddingSize: 'Overwrite padding size',
      illegalCharacterReplacer: 'محول الكتابات الغير مسموح بها'
    },
    downloads: {
      title: 'التحميلات',
      queueConcurrency: 'التنزيلات المتزامنة',
      maxBitrate: {
        title: 'الدقة المفضلة',
        9: 'FLAC 1411kbps',
        3: 'MP3 320kbps',
        1: 'MP3 128kbps'
      },
      overwriteFile: {
        title: 'هل يمكنني استبدال الملفات?',
        y: 'نعم, استبدال الملفات',
        n: 'لا, لا تبدل الملفات',
        t: 'استبدل العلامات فقط',
        b: 'لا ، احتفظ بالملفين وأضف رقمًا إلى الملف المكرر'
      },
      fallbackBitrate: 'تراجع الدقة',
      fallbackSearch: 'تراجع البحث',
      logErrors: 'إنشاء ملفات سجل للأخطاء',
      logSearched: 'إنشاء ملفات سجل للمقاطع التي تم البحث عنها',
      createM3U8File: 'انشاء ملف لقوائم التشغيل',
      syncedLyrics: 'انشاء ملف لكلمات الاغنية',
      playlistFilenameTemplate: 'قالب اسم ملف قائمة التشغيل',
      saveDownloadQueue: 'حفظ قائمة انتظار التنزيل عند إغلاق التطبيق'
    },
    covers: {
      title: 'غلاف الالبوم',
      saveArtwork: 'احفظ الغلاف',
      coverImageTemplate: 'تغطية قالب الاسم',
      saveArtworkArtist: 'احفظ صورة الفنان',
      artistImageTemplate: 'قالب صورة الفنان',
      localArtworkSize: 'حجم الصورة',
      embeddedArtworkSize: 'حجم الصورة المدمجة',
      localArtworkFormat: {
        title: 'بأي صيغة تريد حفظ الصورة?',
        jpg: 'jpeg صورة',
        png: 'png صورة',
        both: 'الاثنين png و jpeg'
      },
      jpegImageQuality: 'JPEG دقة صورة'
    },
    tags: {
      head: 'العلامات التي يتم حفظها',
      title: 'العنوان',
      artist: 'الفنان',
      album: 'الالبوم',
      cover: 'الغلاف',
      trackNumber: 'رقم المقطع',
      trackTotal: 'مجموع المقاطع',
      discNumber: 'رقم القرص',
      discTotal: 'مجموع الاقراص',
      albumArtist: 'فنان الالبوم',
      genre: 'Genre',
      year: 'السنة',
      date: 'التاريخ',
      explicit: 'كلمات اغنية صريحة للكبار',
      isrc: 'ISRC',
      length: 'طول المقطع',
      barcode: 'Album Barcode (UPC)',
      bpm: 'BPM',
      replayGain: 'Replay Gain',
      label: 'Album Label',
      lyrics: 'كلمات غير متزامنة',
      copyright: 'حقوق النشر',
      composer: 'ملحن',
      involvedPeople: 'الناس المشتركون'
    },
    other: {
      title: 'غير',
      savePlaylistAsCompilation: 'حفظ قوائم التشغيل كمجموعة',
      useNullSeparator: 'استخدم فاصل فارغ',
      saveID3v1: 'احفظ ملف ID3v1',
      multiArtistSeparator: {
        title: 'كيف تريد فصل الفنانين?',
        nothing: 'احفظ الفنان الرئيسي فقط',
        default: 'استخدام المواصفات القياسية',
        andFeat: 'استخدام& و feat.',
        using: 'استخدام "{separator}"'
      },
      singleAlbumArtist: 'احفظ فقط فنان الألبوم الرئيسي',
      albumVariousArtists: 'احتفظ بـ "فنانين متنوعين" في ألبوم الفنانين',
      removeAlbumVersion: 'إزالة "إصدار الألبوم" من عنوان المسار',
      removeDuplicateArtists: 'إزالة مجموعات الفنانين',
      dateFormat: {
        title: 'صيغة التاريخ لملفات flac',
        year: 'س س س س',
        month: 'ش ش',
        day: 'ي ي'
      },
      featuredToTitle: {
        title: 'ماذا علي أن أفعل مع الفنانين الغير رئيسيين ?',
        0: 'لا شيء',
        1: 'حذفه من العنوان',
        3: 'حذفه من عنوان الاغنية و الالبوم',
        2: 'وضعه في العنوان'
      },
      titleCasing: 'نوع كتابة العناون',
      artistCasing: 'نوع كتابة الفنان',
      casing: {
        nothing: 'بدون تغيير',
        lower: 'احرف صغيرة',
        upper: 'احرف كبيرة',
        start: 'حرف كبير في بداية كل كلمة',
        sentence: 'مثل جملة'
      },
      previewVolume: 'معاينة الحجم',
      executeCommand: {
        title: 'الأمر للتنفيذ بعد التنزيل',
        description: 'اتركه فارغًا بدون إجراء'
      }
    },
    spotify: {
      title: 'مميزات سبوتفاي',
      clientID: 'معرف عميل سبوتفاي',
      clientSecret: 'الكود السري لعميل سبوتفاي',
      username: 'اسم مستخدم سبوتفاي'
    },
    reset: 'إعادة تعيين إلى الافتراضي',
    save: 'حفظ',
    toasts: {
      init: 'تم تحميل الإعدادات!',
      update: 'تم تحديث الاعدادات!',
      ARLcopied: 'تم نسخ ARL إلى الحافظة'
    }
  },
  sidebar: {
    home: 'الرئيسية',
    search: 'بحث',
    charts: 'قائمة الجداول',
    favorites: 'المفضلة',
    linkAnalyzer: 'محلل الروابط',
    settings: 'الاعدادات',
    about: 'حول'
  },
  tracklist: {
    downloadSelection: 'تحميل الاختيار'
  }
}

export default ar
