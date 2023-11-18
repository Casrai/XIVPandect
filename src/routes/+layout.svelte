<script>
    import sidebar from "$lib/components/sidebar.svelte"
</script>

<!-- <Sidebar routes =
[
    {
        "name": "Home",
        "route": "/"
    },
    {
        "name": "Raiding",
        "route": "/raiding",
        "childRoutes": [
            {
                "name": "Macros",
                "route": "/raiding/macros"
            },
            {
                "name": "Markers",
                "route": "/raiding/markers"
            },
            {
                "name": "Arena Images",
                "route": "/raiding/arena-images",
            },
            {
                "name": "Savage",
                "route": "/readme#slots"
                "childroutes": [
                    {"name": "Pandaemonium",
                    "route": "/raiding/savage/pandaemonium"},
                    {"name": "Eden",
                    "route": "/raiding/savage/eden"}
                ]
            },
            {
                "name": "Ultimate",
                "route": "/raiding/ultimate"
                "childroutes": [
                    {"name": "TOP",
                    "route": "/raiding/ultimate/top"},
                    {"name": "DSR",
                    "route": "/raiding/ultimate/dsr"},
                    {"name": "TEA",
                    "route": "/raiding/ultimate/tea"},
                    {"name": "UCOB",
                    "route": "/raiding/ultimate/ucob"},
                    {"name": "UWU",
                    "route": "/raiding/ultimate/uwu"}
                ]
            },
            {
                "name": "Extreme Trials",
                "route": "/raiding/ex-trials"
                "childroutes": [
                    {"name": "Endwalker",
                    "route": "/raiding/ex-trials/ew"},
                    {"name": "Shadowbringers",
                    "route": "/raiding/ex-trials/shb"},
                    {"name": "Stormblood",
                    "route": "/raiding/ex-trials/sb"},
                    {"name": "Heavensward",
                    "route": "/raiding/ex-trials/hw"}
                ]
            }
        ]
    },
    {
        "name": "Combat",
        "route": "/combat",
        "childRoutes": [
            {
                "name": "Openers",
                "route": "/combat/openers"
            },
            {
                "name": "Gear",
                "route": "/combat/gear"
            }
        ],
        "collapseTree": true
    },
    {
        "name": "Collection",
        "route": "/collection",
        "childRoutes": [
            {
                "name": "Triple Triad",
                "route": "/collection/triple-triad"
            },
            {
                "name": "Relics",
                "route": "/collection/relics"
            },
            {
                "name": "Achievements",
                "route": "/collection/achievements"
            }
        ]
    },
    {
        "name": "Plugins",
        "route": "/plugins",
        "childRoutes": [
            {
                "name": "Must-Haves",
                "route": "/plugins/must-haves"
            },
            {
                "name": "Repos",
                "route": "/plugins/repos"
            }
        ]
    },
    {
        "name": "Modding",
        "route": "/modding"
    },
    {
        "name": "GPose",
        "route": "/gpose",
        "childRoutes": [
            {
                "name": "Poses",
                "route": "/gpose/poses"
            },
            {
                "name": "Presets",
                "route": "/gpose/presets"
            }
        ]
    },
    {
        "name": "Art",
        "route": "/art",
        "childRoutes": [
            {
                "name": "Templates",
                "route": "/art/templates"
            },
            {
                "name": "Inspiration",
                "route": "/art/inspo"
            }
        ]
    },
    {
        "name": "Writing",
        "route": "/writing",
        "childRoutes": [
            {
                "name": "Prompts",
                "route": "/writing/prompts"
            },
            {
                "name": "HC Collection",
                "route": "/writing/hc-collection"
            }
        ]
    }    
] /> -->

<!-- <nav>
	<a href="/">Home</a>
	<a href="/raiding">Raiding</a>
	<a href="/combat">Combat</a>
    <a href="/collection">Collection</a>
    <a href="/plugins">Plugins</a>
    <a href="/modding">Modding</a>
    <a href="/gpose">GPose</a>
    <a href="/art">Art</a>
    <a href="/writing">Writing</a>
</nav> -->

<slot></slot>