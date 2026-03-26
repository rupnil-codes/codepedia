interface Language {
    id: number;
    name: string;
    icon: string;
    description: string;
    docsLink: string;
    tutorialLink: string;
}

export const LANGUAGES_DATA: Language[] = [
    {
        id: 1,
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        description: "A high-level, interpreted programming language known for its readability and vast library support.",
        docsLink: "https://docs.python.org/3/",
        tutorialLink: "https://www.learnpython.org/"
    },
    {
        id: 2,
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        description: "A strongly typed superset of JavaScript that adds static types for better tooling and scaling.",
        docsLink: "https://www.typescriptlang.org/docs/",
        tutorialLink: "https://www.typescriptlang.org/play"
    },
    {
        id: 3,
        name: "Rust",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg",
        description: "A systems programming language focused on safety, speed, and concurrency without a garbage collector.",
        docsLink: "https://doc.rust-lang.org/book/",
        tutorialLink: "https://rust-lang-nursery.github.io/rust-cookbook/"
    },
    {
        id: 4,
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        description: "The engine of the modern web. Essential for front-end development and increasingly popular on the server.",
        docsLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        tutorialLink: "https://javascript.info/"
    },
    {
        id: 5,
        name: "Go",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg",
        description: "An open-source language by Google designed for building simple, reliable, and efficient software.",
        docsLink: "https://go.dev/doc/",
        tutorialLink: "https://go.dev/tour/"
    },
    {
        id: 6,
        name: "C++",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        description: "A powerful general-purpose language used for game engines, operating systems, and high-performance apps.",
        docsLink: "https://en.cppreference.com/w/",
        tutorialLink: "https://www.learncpp.com/"
    },
    {
        id: 7,
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        description: "A class-based, object-oriented language designed to have as few implementation dependencies as possible.",
        docsLink: "https://docs.oracle.com/en/java/",
        tutorialLink: "https://dev.java/learn/"
    },
    {
        id: 8,
        name: "C#",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
        description: "Developed by Microsoft, it's the primary language for .NET development and the Unity game engine.",
        docsLink: "https://learn.microsoft.com/en-us/dotnet/csharp/",
        tutorialLink: "https://learn.microsoft.com/en-us/training/paths/get-started-c-sharp-part-1/"
    },
    {
        id: 9,
        name: "Swift",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
        description: "Apple's modern language for iOS and macOS development. Fast, safe, and interactive.",
        docsLink: "https://www.swift.org/documentation/",
        tutorialLink: "https://developer.apple.com/tutorials/swiftui"
    },
    {
        id: 10,
        name: "Kotlin",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
        description: "A modern, cross-platform language that is the preferred choice for Android app development.",
        docsLink: "https://kotlinlang.org/docs/home.html",
        tutorialLink: "https://play.kotlinlang.org/byExample/overview"
    },
    {
        id: 11,
        name: "PHP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        description: "A popular general-purpose scripting language that is especially suited to web development.",
        docsLink: "https://www.php.net/docs.php",
        tutorialLink: "https://www.phptherightway.com/"
    },
    {
        id: 12,
        name: "Ruby",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
        description: "A dynamic, open-source programming language with a focus on simplicity and productivity.",
        docsLink: "https://www.ruby-lang.org/en/documentation/",
        tutorialLink: "https://www.ruby-lang.org/en/documentation/quickstart/"
    },
    {
        id: 13,
        name: "Dart",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
        description: "A client-optimized language for fast apps on any platform, powering the Flutter framework.",
        docsLink: "https://dart.dev/guides",
        tutorialLink: "https://dart.dev/tutorials"
    },
    {
        id: 14,
        name: "SQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        description: "The standard language for relational database management and data manipulation.",
        docsLink: "https://www.postgresql.org/docs/",
        tutorialLink: "https://sqlbolt.com/"
    },
    {
        id: 15,
        name: "Lua",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg",
        description: "A lightweight, high-level scripting language designed primarily for embedded use in applications.",
        docsLink: "https://www.lua.org/docs.html",
        tutorialLink: "https://www.lua.org/pil/contents.html"
    },
    {
        id: 16,
        name: "C",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
        description: "The foundation of modern computing. Low-level, efficient, and used everywhere from kernels to microwaves.",
        docsLink: "https://en.cppreference.com/w/c",
        tutorialLink: "https://www.learn-c.org/"
    },
    {
        id: 17,
        name: "R",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
        description: "A language and environment for statistical computing and graphics, favored by data scientists.",
        docsLink: "https://www.r-project.org/other-docs.html",
        tutorialLink: "https://www.statmethods.net/"
    },
    {
        id: 18,
        name: "Haskell",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/haskell/haskell-original.svg",
        description: "An advanced, purely functional programming language with a very strong static type system.",
        docsLink: "https://www.haskell.org/documentation/",
        tutorialLink: "http://learnyouahaskell.com/"
    },
    {
        id: 19,
        name: "Elixir",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-original.svg",
        description: "A dynamic, functional language designed for building scalable and maintainable applications.",
        docsLink: "https://elixir-lang.org/docs.html",
        tutorialLink: "https://exercism.org/tracks/elixir"
    },
    {
        id: 20,
        name: "Scala",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg",
        description: "Combines object-oriented and functional programming in one concise, high-level language.",
        docsLink: "https://docs.scala-lang.org/",
        tutorialLink: "https://docs.scala-lang.org/tour/tour-of-scala.html"
    },
    {
        id: 21,
        name: "Zig",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/zig/zig-original.svg",
        description: "A general-purpose programming language and toolchain for maintaining robust and reusable software.",
        docsLink: "https://ziglang.org/documentation/master/",
        tutorialLink: "https://ziglearn.org/"
    },
    {
        id: 22,
        name: "Mojo",
        icon: "https://modular-mojotools.gallerycdn.vsassets.io/extensions/modular-mojotools/vscode-mojo/26.2.0/1769515408608/Microsoft.VisualStudio.Services.Icons.Default",
        description: "A new programming language that bridges the gap between research and production by combining Python and C++ performance.",
        docsLink: "https://docs.modular.com/mojo/",
        tutorialLink: "https://docs.modular.com/mojo/manual/"
    },
    {
        id: 23,
        name: "Julia",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/julia/julia-original.svg",
        description: "Designed for high-performance numerical and scientific computing with a syntax familiar to Python users.",
        docsLink: "https://docs.julialang.org/",
        tutorialLink: "https://julialang.org/learning/"
    },
    {
        id: 24,
        name: "Perl",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/perl/perl-original.svg",
        description: "A highly capable, feature-rich programming language with over 30 years of development.",
        docsLink: "https://www.perl.org/docs.html",
        tutorialLink: "https://www.perltutorial.org/"
    },
    {
        id: 25,
        name: "Objective-C",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/objectivec/objectivec-plain.svg",
        description: "The primary language used by Apple for iOS and OS X development before the introduction of Swift.",
        docsLink: "https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/",
        tutorialLink: "https://www.tutorialspoint.com/objective_c/index.htm"
    },
    {
        id: 26,
        name: "Fortran",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fortran/fortran-original.svg",
        description: "A general-purpose, compiled imperative programming language that is especially suited to numeric and scientific computing.",
        docsLink: "https://fortran-lang.org/learn/",
        tutorialLink: "https://fortran-lang.org/en/learn/quickstart/"
    },
    {
        id: 27,
        name: "Matlab",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg",
        description: "A multi-paradigm numerical computing environment and proprietary programming language developed by MathWorks.",
        docsLink: "https://www.mathworks.com/help/matlab/",
        tutorialLink: "https://www.mathworks.com/learn/tutorials/matlab-onramp.html"
    },
    {
        id: 28,
        name: "Bash",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
        description: "An sh-compatible shell language used to automate tasks and manage Linux systems.",
        docsLink: "https://www.gnu.org/software/bash/manual/",
        tutorialLink: "https://linuxjourney.com/lesson/bash-scripting"
    },
    {
        id: 29,
        name: "Clojure",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/clojure/clojure-original.svg",
        description: "A modern, dynamic, and functional dialect of the Lisp programming language on the Java platform.",
        docsLink: "https://clojure.org/reference/documentation",
        tutorialLink: "https://clojure.org/guides/getting_started"
    },
    {
        id: 30,
        name: "Solidity",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg",
        description: "An object-oriented, high-level language for implementing smart contracts on various blockchain platforms.",
        docsLink: "https://docs.soliditylang.org/",
        tutorialLink: "https://cryptozombies.io/"
    }
];