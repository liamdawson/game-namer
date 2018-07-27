declare module "@githubprimer/octicons-react" {
  import * as React from 'react'

  type Icon<
    W extends number = number,
    H extends number = number
    > = React.SFC<{}> & { size: [W, H] };

  type Size = 'small' | 'medium' | 'large'
  interface OcticonProps {
    ariaLabel?: string
    children?: React.ReactElement<any>
    height?: number
    icon: Icon
    size?: number | Size
    verticalAlign?: 'middle' | 'text-bottom' | 'text-top' | 'top'
    width?: number
  }
  const Octicon: React.SFC<OcticonProps>
  export default Octicon
  /* THIS FILE IS GENERATED. DO NOT EDIT IT. */

  const Alert: Icon<16, 16>
  const ArrowDown: Icon<10, 16>
  const ArrowLeft: Icon<10, 16>
  const ArrowRight: Icon<10, 16>
  const ArrowSmallDown: Icon<6, 16>
  const ArrowSmallLeft: Icon<6, 16>
  const ArrowSmallRight: Icon<6, 16>
  const ArrowSmallUp: Icon<6, 16>
  const ArrowUp: Icon<10, 16>
  const Beaker: Icon<16, 16>
  const Bell: Icon<14, 16>
  const Bold: Icon<10, 16>
  const Book: Icon<16, 16>
  const Bookmark: Icon<10, 16>
  const Briefcase: Icon<14, 16>
  const Broadcast: Icon<16, 16>
  const Browser: Icon<14, 16>
  const Bug: Icon<16, 16>
  const Calendar: Icon<14, 16>
  const Check: Icon<12, 16>
  const Checklist: Icon<16, 16>
  const ChevronDown: Icon<10, 16>
  const ChevronLeft: Icon<8, 16>
  const ChevronRight: Icon<8, 16>
  const ChevronUp: Icon<10, 16>
  const CircleSlash: Icon<14, 16>
  const CircuitBoard: Icon<14, 16>
  const Clippy: Icon<14, 16>
  const Clock: Icon<14, 16>
  const CloudDownload: Icon<16, 16>
  const CloudUpload: Icon<16, 16>
  const Code: Icon<14, 16>
  const Comment: Icon<16, 16>
  const CommentDiscussion: Icon<16, 16>
  const CreditCard: Icon<16, 16>
  const Dash: Icon<8, 16>
  const Dashboard: Icon<16, 16>
  const Database: Icon<12, 16>
  const DesktopDownload: Icon<16, 16>
  const DeviceCamera: Icon<16, 16>
  const DeviceCameraVideo: Icon<16, 16>
  const DeviceDesktop: Icon<16, 16>
  const DeviceMobile: Icon<10, 16>
  const Diff: Icon<13, 16>
  const DiffAdded: Icon<14, 16>
  const DiffIgnored: Icon<14, 16>
  const DiffModified: Icon<14, 16>
  const DiffRemoved: Icon<14, 16>
  const DiffRenamed: Icon<14, 16>
  const Ellipsis: Icon<12, 16>
  const Eye: Icon<16, 16>
  const File: Icon<12, 16>
  const FileBinary: Icon<12, 16>
  const FileCode: Icon<12, 16>
  const FileDirectory: Icon<14, 16>
  const FileMedia: Icon<12, 16>
  const FilePdf: Icon<12, 16>
  const FileSubmodule: Icon<14, 16>
  const FileSymlinkDirectory: Icon<14, 16>
  const FileSymlinkFile: Icon<12, 16>
  const FileZip: Icon<12, 16>
  const Flame: Icon<12, 16>
  const Fold: Icon<14, 16>
  const Gear: Icon<14, 16>
  const Gift: Icon<14, 16>
  const Gist: Icon<12, 16>
  const GistSecret: Icon<14, 16>
  const GitBranch: Icon<10, 16>
  const GitCommit: Icon<14, 16>
  const GitCompare: Icon<14, 16>
  const GitMerge: Icon<12, 16>
  const GitPullRequest: Icon<12, 16>
  const Globe: Icon<14, 16>
  const Grabber: Icon<8, 16>
  const Graph: Icon<16, 16>
  const Heart: Icon<12, 16>
  const History: Icon<14, 16>
  const Home: Icon<16, 16>
  const HorizontalRule: Icon<10, 16>
  const Hubot: Icon<14, 16>
  const Inbox: Icon<14, 16>
  const Info: Icon<14, 16>
  const IssueClosed: Icon<16, 16>
  const IssueOpened: Icon<14, 16>
  const IssueReopened: Icon<14, 16>
  const Italic: Icon<6, 16>
  const Jersey: Icon<14, 16>
  const KebabHorizontal: Icon<13, 16>
  const KebabVertical: Icon<3, 16>
  const Key: Icon<14, 16>
  const Keyboard: Icon<16, 16>
  const Law: Icon<14, 16>
  const LightBulb: Icon<12, 16>
  const Link: Icon<16, 16>
  const LinkExternal: Icon<12, 16>
  const ListOrdered: Icon<12, 16>
  const ListUnordered: Icon<12, 16>
  const Location: Icon<12, 16>
  const Lock: Icon<12, 16>
  const LogoGist: Icon<25, 16>
  const LogoGithub: Icon<45, 16>
  const Mail: Icon<14, 16>
  const MailRead: Icon<14, 16>
  const MarkGithub: Icon<16, 16>
  const Markdown: Icon<16, 16>
  const Megaphone: Icon<16, 16>
  const Mention: Icon<14, 16>
  const Milestone: Icon<14, 16>
  const Mirror: Icon<16, 16>
  const MortarBoard: Icon<16, 16>
  const Mute: Icon<16, 16>
  const NoNewline: Icon<16, 16>
  const Note: Icon<14, 16>
  const Octoface: Icon<16, 16>
  const Organization: Icon<16, 16>
  const Package: Icon<16, 16>
  const Paintcan: Icon<12, 16>
  const Pencil: Icon<14, 16>
  const Person: Icon<12, 16>
  const Pin: Icon<16, 16>
  const Plug: Icon<14, 16>
  const Plus: Icon<12, 16>
  const PlusSmall: Icon<7, 16>
  const PrimitiveDot: Icon<8, 16>
  const PrimitiveSquare: Icon<8, 16>
  const Project: Icon<15, 16>
  const Pulse: Icon<14, 16>
  const Question: Icon<14, 16>
  const Quote: Icon<14, 16>
  const RadioTower: Icon<16, 16>
  const Reply: Icon<14, 16>
  const Repo: Icon<12, 16>
  const RepoClone: Icon<16, 16>
  const RepoForcePush: Icon<12, 16>
  const RepoForked: Icon<10, 16>
  const RepoPull: Icon<16, 16>
  const RepoPush: Icon<12, 16>
  const Report: Icon<16, 16>
  const Rocket: Icon<16, 16>
  const Rss: Icon<10, 16>
  const Ruby: Icon<16, 16>
  const ScreenFull: Icon<14, 16>
  const ScreenNormal: Icon<14, 16>
  const Search: Icon<16, 16>
  const Server: Icon<12, 16>
  const Settings: Icon<16, 16>
  const Shield: Icon<14, 16>
  const SignIn: Icon<14, 16>
  const SignOut: Icon<16, 16>
  const Smiley: Icon<16, 16>
  const Squirrel: Icon<16, 16>
  const Star: Icon<14, 16>
  const Stop: Icon<14, 16>
  const Sync: Icon<12, 16>
  const Tag: Icon<14, 16>
  const Tasklist: Icon<16, 16>
  const Telescope: Icon<14, 16>
  const Terminal: Icon<14, 16>
  const TextSize: Icon<18, 16>
  const ThreeBars: Icon<12, 16>
  const Thumbsdown: Icon<16, 16>
  const Thumbsup: Icon<16, 16>
  const Tools: Icon<16, 16>
  const Trashcan: Icon<12, 16>
  const TriangleDown: Icon<12, 16>
  const TriangleLeft: Icon<6, 16>
  const TriangleRight: Icon<6, 16>
  const TriangleUp: Icon<12, 16>
  const Unfold: Icon<14, 16>
  const Unmute: Icon<16, 16>
  const Unverified: Icon<16, 16>
  const Verified: Icon<16, 16>
  const Versions: Icon<14, 16>
  const Watch: Icon<12, 16>
  const X: Icon<12, 16>
  const Zap: Icon<10, 16>

  type IconsByName = {
    'alert': Icon<16, 16>,
    'arrow-down': Icon<10, 16>,
    'arrow-left': Icon<10, 16>,
    'arrow-right': Icon<10, 16>,
    'arrow-small-down': Icon<6, 16>,
    'arrow-small-left': Icon<6, 16>,
    'arrow-small-right': Icon<6, 16>,
    'arrow-small-up': Icon<6, 16>,
    'arrow-up': Icon<10, 16>,
    'beaker': Icon<16, 16>,
    'bell': Icon<14, 16>,
    'bold': Icon<10, 16>,
    'book': Icon<16, 16>,
    'bookmark': Icon<10, 16>,
    'briefcase': Icon<14, 16>,
    'broadcast': Icon<16, 16>,
    'browser': Icon<14, 16>,
    'bug': Icon<16, 16>,
    'calendar': Icon<14, 16>,
    'check': Icon<12, 16>,
    'checklist': Icon<16, 16>,
    'chevron-down': Icon<10, 16>,
    'chevron-left': Icon<8, 16>,
    'chevron-right': Icon<8, 16>,
    'chevron-up': Icon<10, 16>,
    'circle-slash': Icon<14, 16>,
    'circuit-board': Icon<14, 16>,
    'clippy': Icon<14, 16>,
    'clock': Icon<14, 16>,
    'cloud-download': Icon<16, 16>,
    'cloud-upload': Icon<16, 16>,
    'code': Icon<14, 16>,
    'comment': Icon<16, 16>,
    'comment-discussion': Icon<16, 16>,
    'credit-card': Icon<16, 16>,
    'dash': Icon<8, 16>,
    'dashboard': Icon<16, 16>,
    'database': Icon<12, 16>,
    'desktop-download': Icon<16, 16>,
    'device-camera': Icon<16, 16>,
    'device-camera-video': Icon<16, 16>,
    'device-desktop': Icon<16, 16>,
    'device-mobile': Icon<10, 16>,
    'diff': Icon<13, 16>,
    'diff-added': Icon<14, 16>,
    'diff-ignored': Icon<14, 16>,
    'diff-modified': Icon<14, 16>,
    'diff-removed': Icon<14, 16>,
    'diff-renamed': Icon<14, 16>,
    'ellipsis': Icon<12, 16>,
    'eye': Icon<16, 16>,
    'file': Icon<12, 16>,
    'file-binary': Icon<12, 16>,
    'file-code': Icon<12, 16>,
    'file-directory': Icon<14, 16>,
    'file-media': Icon<12, 16>,
    'file-pdf': Icon<12, 16>,
    'file-submodule': Icon<14, 16>,
    'file-symlink-directory': Icon<14, 16>,
    'file-symlink-file': Icon<12, 16>,
    'file-zip': Icon<12, 16>,
    'flame': Icon<12, 16>,
    'fold': Icon<14, 16>,
    'gear': Icon<14, 16>,
    'gift': Icon<14, 16>,
    'gist': Icon<12, 16>,
    'gist-secret': Icon<14, 16>,
    'git-branch': Icon<10, 16>,
    'git-commit': Icon<14, 16>,
    'git-compare': Icon<14, 16>,
    'git-merge': Icon<12, 16>,
    'git-pull-request': Icon<12, 16>,
    'globe': Icon<14, 16>,
    'grabber': Icon<8, 16>,
    'graph': Icon<16, 16>,
    'heart': Icon<12, 16>,
    'history': Icon<14, 16>,
    'home': Icon<16, 16>,
    'horizontal-rule': Icon<10, 16>,
    'hubot': Icon<14, 16>,
    'inbox': Icon<14, 16>,
    'info': Icon<14, 16>,
    'issue-closed': Icon<16, 16>,
    'issue-opened': Icon<14, 16>,
    'issue-reopened': Icon<14, 16>,
    'italic': Icon<6, 16>,
    'jersey': Icon<14, 16>,
    'kebab-horizontal': Icon<13, 16>,
    'kebab-vertical': Icon<3, 16>,
    'key': Icon<14, 16>,
    'keyboard': Icon<16, 16>,
    'law': Icon<14, 16>,
    'light-bulb': Icon<12, 16>,
    'link': Icon<16, 16>,
    'link-external': Icon<12, 16>,
    'list-ordered': Icon<12, 16>,
    'list-unordered': Icon<12, 16>,
    'location': Icon<12, 16>,
    'lock': Icon<12, 16>,
    'logo-gist': Icon<25, 16>,
    'logo-github': Icon<45, 16>,
    'mail': Icon<14, 16>,
    'mail-read': Icon<14, 16>,
    'mark-github': Icon<16, 16>,
    'markdown': Icon<16, 16>,
    'megaphone': Icon<16, 16>,
    'mention': Icon<14, 16>,
    'milestone': Icon<14, 16>,
    'mirror': Icon<16, 16>,
    'mortar-board': Icon<16, 16>,
    'mute': Icon<16, 16>,
    'no-newline': Icon<16, 16>,
    'note': Icon<14, 16>,
    'octoface': Icon<16, 16>,
    'organization': Icon<16, 16>,
    'package': Icon<16, 16>,
    'paintcan': Icon<12, 16>,
    'pencil': Icon<14, 16>,
    'person': Icon<12, 16>,
    'pin': Icon<16, 16>,
    'plug': Icon<14, 16>,
    'plus': Icon<12, 16>,
    'plus-small': Icon<7, 16>,
    'primitive-dot': Icon<8, 16>,
    'primitive-square': Icon<8, 16>,
    'project': Icon<15, 16>,
    'pulse': Icon<14, 16>,
    'question': Icon<14, 16>,
    'quote': Icon<14, 16>,
    'radio-tower': Icon<16, 16>,
    'reply': Icon<14, 16>,
    'repo': Icon<12, 16>,
    'repo-clone': Icon<16, 16>,
    'repo-force-push': Icon<12, 16>,
    'repo-forked': Icon<10, 16>,
    'repo-pull': Icon<16, 16>,
    'repo-push': Icon<12, 16>,
    'report': Icon<16, 16>,
    'rocket': Icon<16, 16>,
    'rss': Icon<10, 16>,
    'ruby': Icon<16, 16>,
    'screen-full': Icon<14, 16>,
    'screen-normal': Icon<14, 16>,
    'search': Icon<16, 16>,
    'server': Icon<12, 16>,
    'settings': Icon<16, 16>,
    'shield': Icon<14, 16>,
    'sign-in': Icon<14, 16>,
    'sign-out': Icon<16, 16>,
    'smiley': Icon<16, 16>,
    'squirrel': Icon<16, 16>,
    'star': Icon<14, 16>,
    'stop': Icon<14, 16>,
    'sync': Icon<12, 16>,
    'tag': Icon<14, 16>,
    'tasklist': Icon<16, 16>,
    'telescope': Icon<14, 16>,
    'terminal': Icon<14, 16>,
    'text-size': Icon<18, 16>,
    'three-bars': Icon<12, 16>,
    'thumbsdown': Icon<16, 16>,
    'thumbsup': Icon<16, 16>,
    'tools': Icon<16, 16>,
    'trashcan': Icon<12, 16>,
    'triangle-down': Icon<12, 16>,
    'triangle-left': Icon<6, 16>,
    'triangle-right': Icon<6, 16>,
    'triangle-up': Icon<12, 16>,
    'unfold': Icon<14, 16>,
    'unmute': Icon<16, 16>,
    'unverified': Icon<16, 16>,
    'verified': Icon<16, 16>,
    'versions': Icon<14, 16>,
    'watch': Icon<12, 16>,
    'x': Icon<12, 16>,
    'zap': Icon<10, 16>
  }
  const iconsByName: IconsByName

  function getIconByName<T extends keyof IconsByName>(
    name: T
  ): IconsByName[T];
  function getIconByName(name: string): Icon | undefined

  export {
    Icon,
    getIconByName,
    iconsByName,
    Alert,
    ArrowDown,
    ArrowLeft,
    ArrowRight,
    ArrowSmallDown,
    ArrowSmallLeft,
    ArrowSmallRight,
    ArrowSmallUp,
    ArrowUp,
    Beaker,
    Bell,
    Bold,
    Book,
    Bookmark,
    Briefcase,
    Broadcast,
    Browser,
    Bug,
    Calendar,
    Check,
    Checklist,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    ChevronUp,
    CircleSlash,
    CircuitBoard,
    Clippy,
    Clock,
    CloudDownload,
    CloudUpload,
    Code,
    Comment,
    CommentDiscussion,
    CreditCard,
    Dash,
    Dashboard,
    Database,
    DesktopDownload,
    DeviceCamera,
    DeviceCameraVideo,
    DeviceDesktop,
    DeviceMobile,
    Diff,
    DiffAdded,
    DiffIgnored,
    DiffModified,
    DiffRemoved,
    DiffRenamed,
    Ellipsis,
    Eye,
    File,
    FileBinary,
    FileCode,
    FileDirectory,
    FileMedia,
    FilePdf,
    FileSubmodule,
    FileSymlinkDirectory,
    FileSymlinkFile,
    FileZip,
    Flame,
    Fold,
    Gear,
    Gift,
    Gist,
    GistSecret,
    GitBranch,
    GitCommit,
    GitCompare,
    GitMerge,
    GitPullRequest,
    Globe,
    Grabber,
    Graph,
    Heart,
    History,
    Home,
    HorizontalRule,
    Hubot,
    Inbox,
    Info,
    IssueClosed,
    IssueOpened,
    IssueReopened,
    Italic,
    Jersey,
    KebabHorizontal,
    KebabVertical,
    Key,
    Keyboard,
    Law,
    LightBulb,
    Link,
    LinkExternal,
    ListOrdered,
    ListUnordered,
    Location,
    Lock,
    LogoGist,
    LogoGithub,
    Mail,
    MailRead,
    MarkGithub,
    Markdown,
    Megaphone,
    Mention,
    Milestone,
    Mirror,
    MortarBoard,
    Mute,
    NoNewline,
    Note,
    Octoface,
    Organization,
    Package,
    Paintcan,
    Pencil,
    Person,
    Pin,
    Plug,
    Plus,
    PlusSmall,
    PrimitiveDot,
    PrimitiveSquare,
    Project,
    Pulse,
    Question,
    Quote,
    RadioTower,
    Reply,
    Repo,
    RepoClone,
    RepoForcePush,
    RepoForked,
    RepoPull,
    RepoPush,
    Report,
    Rocket,
    Rss,
    Ruby,
    ScreenFull,
    ScreenNormal,
    Search,
    Server,
    Settings,
    Shield,
    SignIn,
    SignOut,
    Smiley,
    Squirrel,
    Star,
    Stop,
    Sync,
    Tag,
    Tasklist,
    Telescope,
    Terminal,
    TextSize,
    ThreeBars,
    Thumbsdown,
    Thumbsup,
    Tools,
    Trashcan,
    TriangleDown,
    TriangleLeft,
    TriangleRight,
    TriangleUp,
    Unfold,
    Unmute,
    Unverified,
    Verified,
    Versions,
    Watch,
    X,
    Zap
  }
}
