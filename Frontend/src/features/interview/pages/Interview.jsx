import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInterview } from '../hooks/useInterview.js'
import { useAuth } from '../../auth/hooks/useAuth.js'
import { useNavigate, useParams } from 'react-router'
import {
    ChevronDownIcon,
    XMarkIcon,
    ArrowLeftIcon,
    CodeBracketIcon,
    LightBulbIcon,
    ChartBarIcon,
    ArrowDownTrayIcon,
    ArrowRightOnRectangleIcon,
    Bars3Icon,
    BellIcon,
    QuestionMarkCircleIcon,
    ExclamationCircleIcon,
    ArrowTrendingUpIcon,
    CheckCircleIcon,
    ShieldCheckIcon,
    BoltIcon,
    UserGroupIcon,
    PlayCircleIcon,
    BookOpenIcon,
    CheckIcon,
    DocumentTextIcon,
    BriefcaseIcon,
    CalendarIcon
} from '@heroicons/react/24/outline'

const LogoIcon = ({ className = "w-8 h-8" }) => (
    <svg className={`${className} flex-shrink-0`} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="topFaceGrad" x1="9" y1="15" x2="39" y2="15" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
            <linearGradient id="topSideGrad" x1="8.2" y1="22" x2="39.8" y2="22" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#1d4ed8" />
                <stop offset="100%" stopColor="#1a365d" />
            </linearGradient>
            <linearGradient id="midFaceGrad" x1="9" y1="21" x2="39" y2="21" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
            <linearGradient id="midSideGrad" x1="8.2" y1="28" x2="39.8" y2="28" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#1e40af" />
                <stop offset="100%" stopColor="#172554" />
            </linearGradient>
            <linearGradient id="botFaceGrad" x1="9" y1="27" x2="39" y2="27" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#1d4ed8" />
                <stop offset="100%" stopColor="#1e40af" />
            </linearGradient>
            <linearGradient id="botSideGrad" x1="8.2" y1="34" x2="39.8" y2="34" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#1e3a8a" />
                <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
        </defs>
        <path d="M 8.2,28.8 L 8.2,31.8 C 8.2,32.3 8.5,32.8 9,33.1 L 22.8,39.8 C 23.5,40.1 24.5,40.1 25.2,39.8 L 39,33.1 C 39.5,32.8 39.8,32.3 39.8,31.8 L 39.8,28.8 L 25.2,36.1 C 24.5,36.4 23.5,36.4 22.8,36.1 Z" fill="url(#botSideGrad)" />
        <path d="M 22.8,19.3 L 9,26.2 C 8.3,26.5 8.3,27.5 9,27.8 L 22.8,34.7 C 23.5,35 24.5,35 25.2,34.7 L 39,27.8 C 39.7,27.5 39.7,26.5 39,26.2 L 25.2,19.3 C 24.5,19 23.5,19 22.8,19.3 Z" fill="url(#botFaceGrad)" />
        <path d="M 8.2,22.8 L 8.2,25.8 C 8.2,26.3 8.5,26.8 9,27.1 L 22.8,33.8 C 23.5,34.1 24.5,34.1 25.2,33.8 L 39,27.1 C 39.5,26.8 39.8,26.3 39.8,25.8 L 39.8,22.8 L 25.2,30.1 C 24.5,30.4 23.5,30.4 22.8,30.1 Z" fill="url(#midSideGrad)" />
        <path d="M 22.8,13.3 L 9,20.2 C 8.3,20.5 8.3,21.5 9,21.8 L 22.8,28.7 C 23.5,29 24.5,29 25.2,28.7 L 39,21.8 C 39.7,21.5 39.7,20.5 39,20.2 L 25.2,13.3 C 24.5,13 23.5,13 22.8,13.3 Z" fill="url(#midFaceGrad)" />
        <path d="M 8.2,16.8 L 8.2,19.8 C 8.2,20.3 8.5,20.8 9,21.1 L 22.8,27.8 C 23.5,28.1 24.5,28.1 25.2,27.8 L 39,21.1 C 39.5,20.8 39.8,20.3 39.8,19.8 L 39.8,16.8 L 25.2,24.1 C 24.5,24.4 23.5,24.4 22.8,24.1 Z" fill="url(#topSideGrad)" />
        <path d="M 22.8,7.3 L 9,14.2 C 8.3,14.5 8.3,15.5 9,15.8 L 22.8,22.7 C 23.5,23 24.5,23 25.2,22.7 L 39,15.8 C 39.7,15.5 39.7,14.5 39,14.2 L 25.2,7.3 C 24.5,7 23.5,7 22.8,7.3 Z" fill="url(#topFaceGrad)" />
        <path d="M 14,17.5 L 19,18.5 L 24,15.5 L 32.5,11.5" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 27.5,11.5 L 32.5,11.5 L 32.5,16.5" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

// ── Sub-components ────────────────────────────────────────────────────────────

const TechnicalAccordionCard = ({ item, index }) => {
    const [isOpen, setIsOpen] = useState(index === 0) // Open the first one by default

    return (
        <motion.div
            layout
            initial={false}
            animate={{
                borderColor: isOpen ? 'rgba(0, 80, 180, 0.25)' : 'rgba(226, 232, 240, 0.6)',
                boxShadow: isOpen ? '0 12px 24px -10px rgba(0, 80, 180, 0.08), 0 4px 16px -10px rgba(0, 0, 0, 0.02)' : '0 2px 8px -4px rgba(0,0,0,0.02)',
                backgroundColor: isOpen ? '#ffffff' : 'rgba(255, 255, 255, 0.7)'
            }}
            whileHover={{ y: isOpen ? 0 : -2, borderColor: isOpen ? 'rgba(0, 80, 180, 0.25)' : 'rgba(0, 80, 180, 0.15)' }}
            transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
            className="relative border rounded-2xl overflow-hidden bg-surface-container-lowest group transition-shadow duration-300"
        >
            <div className={`absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-500 ease-[0.25,1,0.5,1] ${isOpen ? 'bg-gradient-to-b from-primary to-blue-400 h-full' : 'bg-transparent h-0'}`} />
            <button
                className={`w-full p-5 md:p-6 pl-6 md:pl-7 flex items-start justify-between gap-4 text-left focus:outline-none cursor-pointer select-none transition-colors duration-300 ${isOpen ? 'bg-slate-50/40' : 'hover:bg-slate-50/20'}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex flex-col pr-md">
                    <div className="flex flex-wrap items-center gap-2 mb-2.5">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-extrabold uppercase tracking-wider transition-colors group-hover:bg-primary/10">
                            Question 0{index + 1}
                        </span>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container border border-outline-variant/30 text-on-surface-variant/80 text-[10px] font-bold">
                            Technical Assessment
                        </span>
                    </div>
                    <h3 className="text-base md:text-[17px] font-semibold text-on-surface leading-snug tracking-tight text-slate-800 transition-colors group-hover:text-black">
                        {item.question}
                    </h3>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 1.05 : 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    className={`flex-shrink-0 mt-1.5 p-1 rounded-lg transition-colors ${isOpen ? 'text-primary bg-primary/5' : 'text-on-surface-variant group-hover:text-slate-800'}`}
                >
                    <ChevronDownIcon className="w-4 h-4 stroke-[2.5]" />
                </motion.div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        <div className="px-5 pb-5 md:px-6 md:pb-6 flex flex-col gap-4 border-t border-outline-variant/20 pt-5 bg-gradient-to-b from-slate-50/30 to-transparent overflow-hidden">
                            <div className="p-5 bg-surface-container-lowest border border-outline-variant/30 border-l-3 border-primary rounded-xl flex flex-col gap-2 shadow-[0_1px_2px_rgba(0,0,0,0.01)] hover:shadow-md hover:border-primary/20 transition-all duration-300">
                                <div className="flex items-center gap-1.5 text-primary select-none">
                                    <CheckCircleIcon className="w-4.5 h-4.5" />
                                    <h4 className="text-[11px] font-bold uppercase tracking-wider">Model Answer</h4>
                                </div>
                                <p className="font-body-md text-on-surface text-sm leading-relaxed text-slate-700 max-w-3xl">{item.answer}</p>
                            </div>

                            <div className="p-5 bg-primary/[0.015] border border-outline-variant/30 border-l-3 border-primary-container rounded-xl flex flex-col gap-2 shadow-[0_1px_2px_rgba(0,0,0,0.01)] hover:shadow-md hover:border-primary/20 transition-all duration-300">
                                <div className="flex items-center gap-1.5 select-none">
                                    <LightBulbIcon className="w-4.5 h-4.5 text-primary" />
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary">AI Insights &amp; Intention</span>
                                </div>
                                <p className="font-body-md text-on-surface-variant text-sm leading-relaxed max-w-3xl">{item.intention}</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

const BehavioralAccordionCard = ({ item, index }) => {
    const [isOpen, setIsOpen] = useState(index === 0)

    // Dynamic competency mapping configuration matching the index
    const behavioralCompetencies = [
        { category: "Leadership & Initiative", method: "STAR Methodology", color: "text-blue-700 bg-blue-50/70 border-blue-200/50" },
        { category: "Conflict Resolution", method: "Situational Response", color: "text-purple-700 bg-purple-50/70 border-purple-200/50" },
        { category: "Adaptability & Growth", method: "STAR Methodology", color: "text-indigo-700 bg-indigo-50/70 border-indigo-200/50" },
        { category: "Problem Solving & Grit", method: "Critical Assessment", color: "text-amber-700 bg-amber-50/70 border-amber-200/50" },
        { category: "Collaboration & Teamwork", method: "Ownership Mindset", color: "text-emerald-700 bg-emerald-50/70 border-emerald-200/50" },
        { category: "Effective Communication", method: "Situational Response", color: "text-rose-700 bg-rose-50/70 border-rose-200/50" }
    ]
    const comp = behavioralCompetencies[index % behavioralCompetencies.length]

    return (
        <motion.div
            layout
            initial={false}
            animate={{
                borderColor: isOpen ? 'rgba(0, 80, 180, 0.25)' : 'rgba(226, 232, 240, 0.6)',
                boxShadow: isOpen ? '0 12px 24px -10px rgba(0, 80, 180, 0.08), 0 4px 16px -10px rgba(0, 0, 0, 0.02)' : '0 2px 8px -4px rgba(0,0,0,0.02)',
                backgroundColor: isOpen ? '#ffffff' : 'rgba(255, 255, 255, 0.7)'
            }}
            whileHover={{ y: isOpen ? 0 : -2, borderColor: isOpen ? 'rgba(0, 80, 180, 0.25)' : 'rgba(0, 80, 180, 0.15)' }}
            transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
            className="relative border rounded-2xl overflow-hidden bg-surface-container-lowest group transition-shadow duration-300"
        >
            <div className={`absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-500 ease-[0.25,1,0.5,1] ${isOpen ? 'bg-gradient-to-b from-primary to-blue-400 h-full' : 'bg-transparent h-0'}`} />
            <button
                className={`w-full text-left p-5 md:p-6 pl-6 md:pl-7 flex items-start justify-between gap-4 focus:outline-none cursor-pointer select-none transition-colors duration-300 ${isOpen ? 'bg-slate-50/40' : 'hover:bg-slate-50/20'}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex flex-col flex-1 min-w-0 pr-2">
                    <div className="flex flex-wrap items-center gap-2 mb-2.5 select-none">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-extrabold uppercase tracking-wider transition-colors group-hover:bg-primary/10">
                            Question 0{index + 1}
                        </span>
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container border border-outline-variant/30 text-on-surface-variant/80 text-[10px] font-bold">
                            Behavioral Assessment
                        </span>
                        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold border transition-transform duration-300 group-hover:scale-[1.02] ${comp.color}`}>
                            {comp.category}
                        </span>
                    </div>
                    <h3 className="text-base md:text-[17px] font-semibold text-on-surface leading-snug tracking-tight text-slate-800 transition-colors group-hover:text-black max-w-3xl">
                        {item.question}
                    </h3>
                    <div className="flex items-center gap-1.5 mt-2 text-[10px] text-on-surface-variant/60 font-bold uppercase tracking-wider select-none">
                        <span>Methodology: {comp.method}</span>
                    </div>
                </div>

                <div className="flex items-center gap-3.5 flex-shrink-0 mt-1 md:mt-1.5">
                    {index % 2 === 0 ? (
                        <span className="inline-flex items-center bg-emerald-500/[0.04] border border-emerald-500/10 text-emerald-600 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase select-none transition-transform duration-300 group-hover:scale-[1.02]">
                            <span className="relative flex h-1.5 w-1.5 mr-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                            </span>
                            Strong Fit
                        </span>
                    ) : (
                        <span className="inline-flex items-center bg-blue-500/[0.04] border border-blue-500/10 text-blue-600 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase select-none transition-transform duration-300 group-hover:scale-[1.02]">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-1.5"></span>
                            Solid Fit
                        </span>
                    )}
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 1.05 : 1 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                        className={`flex-shrink-0 p-1 rounded-lg transition-colors ${isOpen ? 'text-primary bg-primary/5' : 'text-on-surface-variant group-hover:text-slate-800'}`}
                    >
                        <ChevronDownIcon className="w-4 h-4 stroke-[2.5]" />
                    </motion.div>
                </div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        <div className="px-5 pb-5 md:px-6 md:pb-6 flex flex-col gap-4 border-t border-outline-variant/20 pt-5 bg-gradient-to-b from-slate-50/30 to-transparent overflow-hidden">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-surface-container-lowest/80 p-6 rounded-xl border border-outline-variant/40 border-l-3 border-l-primary/60 shadow-[0_1px_3px_rgba(0,0,0,0.01)] flex flex-col gap-3 hover:bg-surface-container-lowest hover:border-primary/20 hover:shadow-md transition-all duration-300">
                                    <div className="flex items-center gap-2 select-none">
                                        <div className="w-7 h-7 rounded bg-primary/5 text-primary flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                                            <ShieldCheckIcon className="w-4 h-4" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[8px] font-extrabold text-primary/60 uppercase tracking-widest leading-none">Interviewer Focus</span>
                                            <h4 className="text-xs font-bold text-slate-800 tracking-wide mt-0.5">Intention &amp; Goal</h4>
                                        </div>
                                    </div>
                                    <p className="text-[13px] text-slate-600 leading-relaxed font-medium max-w-2xl mt-0.5">{item.intention}</p>
                                </div>

                                <div className="bg-surface-container-lowest/80 p-6 rounded-xl border border-outline-variant/40 border-l-3 border-l-indigo-500/60 shadow-[0_1px_3px_rgba(0,0,0,0.01)] flex flex-col gap-3 hover:bg-surface-container-lowest hover:border-indigo-500/20 hover:shadow-md transition-all duration-300">
                                    <div className="flex items-center gap-2 select-none">
                                        <div className="w-7 h-7 rounded bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                                            <BoltIcon className="w-4 h-4" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[8px] font-extrabold text-indigo-600/60 uppercase tracking-widest leading-none">Response Playbook</span>
                                            <h4 className="text-xs font-bold text-slate-800 tracking-wide mt-0.5">Recommended Strategy</h4>
                                        </div>
                                    </div>
                                    <p className="text-[13px] text-slate-600 leading-relaxed font-medium max-w-2xl mt-0.5">{item.answer}</p>
                                </div>
                            </div>

                            <div className="p-5 bg-gradient-to-r from-primary/[0.03] to-blue-500/[0.01] border border-primary/10 border-l-3 border-primary rounded-xl flex items-start gap-4 shadow-[0_1px_3px_rgba(0,80,180,0.005)] hover:shadow-md hover:border-primary/20 transition-all duration-300 select-none">
                                <div className="bg-primary/10 p-2 rounded-lg text-primary flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                                    <LightBulbIcon className="w-5 h-5" />
                                </div>
                                <div className="flex-1">
                                    <span className="font-bold text-on-surface block text-[10px] uppercase tracking-wider mb-1 font-extrabold">AI Coach Strategic Guide</span>
                                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-medium">
                                        Your tone should remain authentic and solution-oriented, focusing on personal growth and business impact.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

// ── Main Component ────────────────────────────────────────────────────────────

const Interview = () => {
    const [activeNav, setActiveNav] = useState('technical')
    const { report, getReportById, loading, getResumePdf } = useInterview()
    const { user, handleLogout } = useAuth()
    const { interviewId } = useParams()
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
    const navigate = useNavigate()

    const [completedTasks, setCompletedTasks] = useState(() => {
        if (!interviewId) return {}
        const saved = localStorage.getItem(`interview-progress-${interviewId}`)
        return saved ? JSON.parse(saved) : {}
    })
    const [expandedRoadmapDays, setExpandedRoadmapDays] = useState({})

    useEffect(() => {
        if (interviewId) {
            getReportById(interviewId)
            const saved = localStorage.getItem(`interview-progress-${interviewId}`)
            setCompletedTasks(saved ? JSON.parse(saved) : {})
        }
    }, [interviewId])

    const toggleTask = (dayNum, taskIndex) => {
        const key = `${dayNum}-${taskIndex}`
        const updated = {
            ...completedTasks,
            [key]: !completedTasks[key]
        }
        setCompletedTasks(updated)
        localStorage.setItem(`interview-progress-${interviewId}`, JSON.stringify(updated))
    }

    const toggleRoadmapDay = (dayNum, defaultState) => {
        setExpandedRoadmapDays(prev => ({
            ...prev,
            [dayNum]: prev[dayNum] !== undefined ? !prev[dayNum] : !defaultState
        }))
    }

    const getInitials = (name) => {
        if (!name) return 'U'
        return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
    }

    if (loading || !report) {
        return (
            <main className="loading-screen">
                <div className="loading-card">
                    {/* Scanner portal animation */}
                    <div className="scanner-portal">
                        <div className="scanner-beam"></div>
                        <ChartBarIcon className="scanner-icon" />
                    </div>

                    <div className="text-center w-full">
                        <h2 className="text-headline-md font-bold text-on-surface mb-1">Fetching Strategy Dossier</h2>
                        <p className="text-body-sm text-on-surface-variant mb-4">Cross-referencing index charts...</p>

                        <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                            <div className="bg-primary h-full rounded-full animate-pulse" style={{ width: '100%' }}></div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }

    // Calculate Roadmap checklist metrics
    const totalTasks = report.preparationPlan.reduce((sum, day) => sum + day.tasks.length, 0)
    const completedCount = Object.keys(completedTasks).filter(key => completedTasks[key]).length
    const progressPct = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0
    const activeDayIdx = report.preparationPlan.findIndex(d => {
        const total = d.tasks.length
        const done = d.tasks.filter((_, tIdx) => !!completedTasks[`${d.day}-${tIdx}`]).length
        return done < total
    })

    return (
        <div className="min-h-screen bg-background text-on-surface flex font-sans">

            {/* Sidebar Navigation */}
            <aside className={`fixed inset-y-0 left-0 z-40 w-60 bg-surface-container-lowest border-r border-outline-variant py-md px-sm flex flex-col transition-transform duration-300 md:translate-x-0 ${mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="mb-md px-sm flex items-center justify-between group cursor-pointer">
                    <div className="flex items-center gap-sm">
                        <LogoIcon className="w-8 h-8 transition-transform duration-300 group-hover:scale-105" />
                        <div>
                            <h1 className="text-headline-sm font-bold text-on-surface leading-tight transition-colors duration-200 group-hover:text-primary">HireStack</h1>
                            <p className="text-label-sm text-on-surface-variant opacity-70 leading-none mt-0.5">Enterprise Clarity</p>
                        </div>
                    </div>
                    <button className="md:hidden text-on-surface-variant cursor-pointer hover:text-on-surface transition-colors" onClick={() => setMobileSidebarOpen(false)}>
                        <XMarkIcon className="w-6 h-6" />
                    </button>
                </div>

                <nav className="flex-1 space-y-base">
                    <button
                        onClick={() => navigate('/')}
                        className="group w-full flex items-center gap-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded-lg px-sm py-xs transition-all text-left cursor-pointer duration-200"
                    >
                        <ArrowLeftIcon className="w-5 h-5 text-on-surface-variant/80 group-hover:text-on-surface group-hover:-translate-x-0.5 transition-all duration-200" />
                        <span className="font-semibold text-label-md">Back to Dashboard</span>
                    </button>

                    <div className="py-2">
                        <div className="h-[1px] bg-outline-variant/60 my-2" />
                        <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant opacity-50 px-sm mb-2">Current Session</p>
                    </div>

                    <button
                        onClick={() => { setActiveNav('technical'); setMobileSidebarOpen(false); }}
                        className={`group w-full flex items-center gap-sm rounded-lg px-sm py-xs transition-all text-left cursor-pointer duration-200 ${activeNav === 'technical'
                                ? 'bg-secondary-container text-on-secondary-container font-semibold border border-outline-variant/10 shadow-[0_1px_2px_rgba(0,0,0,0.02)]'
                                : 'border border-transparent text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                            }`}
                    >
                        <CodeBracketIcon className={`w-5 h-5 transition-colors duration-200 ${activeNav === 'technical' ? 'text-on-secondary-container' : 'text-on-surface-variant/80 group-hover:text-on-surface'
                            }`} />
                        <span className="font-semibold text-label-md">Technical Deep-Dive</span>
                    </button>

                    <button
                        onClick={() => { setActiveNav('behavioral'); setMobileSidebarOpen(false); }}
                        className={`group w-full flex items-center gap-sm rounded-lg px-sm py-xs transition-all text-left cursor-pointer duration-200 ${activeNav === 'behavioral'
                                ? 'bg-secondary-container text-on-secondary-container font-semibold border border-outline-variant/10 shadow-[0_1px_2px_rgba(0,0,0,0.02)]'
                                : 'border border-transparent text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                            }`}
                    >
                        <LightBulbIcon className={`w-5 h-5 transition-colors duration-200 ${activeNav === 'behavioral' ? 'text-on-secondary-container' : 'text-on-surface-variant/80 group-hover:text-on-surface'
                            }`} />
                        <span className="font-semibold text-label-md">Behavioral Insights</span>
                    </button>

                    <button
                        onClick={() => { setActiveNav('roadmap'); setMobileSidebarOpen(false); }}
                        className={`group w-full flex items-center gap-sm rounded-lg px-sm py-xs transition-all text-left cursor-pointer duration-200 ${activeNav === 'roadmap'
                                ? 'bg-secondary-container text-on-secondary-container font-semibold border border-outline-variant/10 shadow-[0_1px_2px_rgba(0,0,0,0.02)]'
                                : 'border border-transparent text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                            }`}
                    >
                        <ChartBarIcon className={`w-5 h-5 transition-colors duration-200 ${activeNav === 'roadmap' ? 'text-on-secondary-container' : 'text-on-surface-variant/80 group-hover:text-on-surface'
                            }`} />
                        <span className="font-semibold text-label-md">Success Roadmap</span>
                    </button>
                </nav>

                <div className="mt-auto space-y-sm pt-md border-t border-outline-variant">
                    <button
                        onClick={() => getResumePdf(interviewId)}
                        className="w-full flex items-center justify-center gap-xs bg-primary text-on-primary rounded-lg py-sm font-semibold transition-all shadow-md hover:shadow-lg hover:opacity-95 transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer"
                    >
                        <ArrowDownTrayIcon className="w-5 h-5" />
                        Download Resume
                    </button>

                    <button
                        className="group w-full flex items-center gap-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded-lg px-sm py-xs transition-all text-left cursor-pointer duration-200"
                        onClick={handleLogout}
                    >
                        <ArrowRightOnRectangleIcon className="w-5 h-5 text-on-surface-variant/80 group-hover:text-on-surface group-hover:translate-x-0.5 transition-all duration-200" />
                        <span className="font-medium text-label-md">Sign Out</span>
                    </button>
                </div>
            </aside>

            {/* Sidebar backdrop for mobile */}
            {mobileSidebarOpen && (
                <div className="fixed inset-0 bg-black/30 z-30 md:hidden" onClick={() => setMobileSidebarOpen(false)}></div>
            )}

            {/* Main Content Canvas */}
            <main className="flex-1 md:ml-60 min-h-screen flex flex-col">

                {/* Top Header */}
                <header className="flex justify-between items-center h-16 w-full px-8 md:px-10 bg-surface-container-lowest sticky top-0 border-b border-outline-variant z-35">
                    <div className="flex items-center gap-md">
                        <button className="md:hidden text-on-surface-variant" onClick={() => setMobileSidebarOpen(true)}>
                            <Bars3Icon className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="flex items-center gap-md">
                        {/* Horizontal tabs to switch view on desktop */}
                        <nav className="hidden md:flex items-center gap-lg">
                            <button
                                onClick={() => setActiveNav('technical')}
                                className={`text-body-md font-medium pb-1.5 transition-all cursor-pointer ${activeNav === 'technical' ? 'text-primary font-bold border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary'}`}
                            >
                                Technical
                            </button>
                            <button
                                onClick={() => setActiveNav('behavioral')}
                                className={`text-body-md font-medium pb-1.5 transition-all cursor-pointer ${activeNav === 'behavioral' ? 'text-primary font-bold border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary'}`}
                            >
                                Behavioral
                            </button>
                            <button
                                onClick={() => setActiveNav('roadmap')}
                                className={`text-body-md font-medium pb-1.5 transition-all cursor-pointer ${activeNav === 'roadmap' ? 'text-primary font-bold border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary'}`}
                            >
                                Roadmap
                            </button>
                        </nav>

                        <div className="flex items-center gap-sm ml-lg border-l border-outline-variant pl-lg text-on-surface-variant">
                            <BellIcon className="w-6 h-6 cursor-pointer hover:text-primary transition-colors" />
                            <QuestionMarkCircleIcon className="w-6 h-6 cursor-pointer hover:text-primary transition-colors" />
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-primary-fixed-dim flex items-center justify-center text-xs font-bold text-on-primary-fixed border border-outline-variant">
                                    {getInitials(user?.username)}
                                </div>
                                <span className="text-body-sm font-semibold text-on-surface hidden md:inline-block">
                                    {user?.username || "Guest User"}
                                </span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Sub-view Content Render */}
                {activeNav === 'technical' && (
                    <div className="flex flex-col lg:flex-row gap-8 py-6 px-8 md:px-10 max-w-[1400px] mx-auto w-full">

                        {/* Left Column: Content */}
                        <section className="flex-1 flex flex-col gap-6 min-w-0">
                            <div className="flex flex-col gap-2 pb-4 border-b border-outline-variant/30">
                                <div className="flex items-center gap-2">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-extrabold uppercase tracking-wider">
                                        Assessment Report
                                    </span>
                                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-surface-container-high border border-outline-variant/30 text-on-surface-variant/80 text-[10px] font-bold">
                                        AI Audit Verified
                                    </span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary via-blue-700 to-indigo-600 bg-clip-text text-transparent pb-1">
                                    Technical Deep-Dive
                                </h2>
                                <div className="flex flex-wrap items-center gap-3 mt-1 text-xs text-on-surface-variant font-medium">
                                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-surface-container-lowest border border-outline-variant/50 rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                                        <BriefcaseIcon className="w-4 h-4 text-primary" />
                                        <span className="text-on-surface font-semibold">{report.title}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-surface-container-lowest border border-outline-variant/50 rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                                        <CalendarIcon className="w-4 h-4 text-on-surface-variant/60" />
                                        <span>Analyzed {new Date(report.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Accordion Questions Section */}
                            <div className="flex flex-col gap-4">
                                {report.technicalQuestions.map((q, index) => (
                                    <TechnicalAccordionCard key={index} item={q} index={index} />
                                ))}
                            </div>
                        </section>

                        {/* Right Column: Sidebar Widgets */}
                        <aside className="w-full lg:w-[340px] flex flex-col gap-6 flex-shrink-0 lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto custom-scrollbar pr-1">

                            {/* Match Score Widget */}
                            <div className="bg-surface-container-lowest border border-outline-variant/45 rounded-2xl p-6 flex flex-col gap-5 shadow-[0_4px_20px_rgba(0,0,0,0.015)]">
                                <div className="flex justify-between items-start">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-primary uppercase tracking-wider font-extrabold">Role Compatibility</span>
                                        <h4 className="text-lg font-bold text-on-surface mt-0.5">Technical Match</h4>
                                    </div>
                                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold">
                                        AI Scored
                                    </span>
                                </div>

                                <div className="relative flex items-center justify-center py-5 select-none">
                                    <svg className="w-32 h-32 transform -rotate-90">
                                        <defs>
                                            <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#0050b4" />
                                                <stop offset="100%" stopColor="#60a5fa" />
                                            </linearGradient>
                                        </defs>
                                        <circle
                                            className="text-outline-variant/30"
                                            cx="64"
                                            cy="64"
                                            fill="transparent"
                                            r="54"
                                            stroke="currentColor"
                                            strokeWidth="6"
                                            strokeDasharray="3 3"
                                        />
                                        <circle
                                            cx="64"
                                            cy="64"
                                            fill="transparent"
                                            r="54"
                                            stroke="url(#scoreGradient)"
                                            strokeDasharray="339.3"
                                            strokeDashoffset={339.3 - (report.matchScore / 100) * 339.3}
                                            strokeWidth="8"
                                            strokeLinecap="round"
                                            className="transition-all duration-1000 ease-out"
                                        />
                                    </svg>
                                    <div className="absolute flex flex-col items-center">
                                        <span className="text-3xl font-extrabold text-on-surface">{report.matchScore}%</span>
                                        <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider mt-0.5">
                                            {report.matchScore >= 80 ? 'Strong' : report.matchScore >= 60 ? 'Moderate' : 'Developing'}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <div className="bg-surface-container-low/20 border border-outline-variant/30 rounded-xl p-3 flex flex-col gap-2">
                                        <div className="flex justify-between items-center text-xs">
                                            <span className="font-semibold text-on-surface-variant">System Architecture</span>
                                            <span className="text-primary font-bold bg-primary/5 px-2 py-0.5 rounded text-[10px]">{Math.min(100, report.matchScore + 4)}%</span>
                                        </div>
                                        <div className="w-full bg-surface-container-low h-1.5 rounded-full overflow-hidden">
                                            <div className="bg-gradient-to-r from-primary to-blue-500 h-full rounded-full" style={{ width: `${Math.min(100, report.matchScore + 4)}%` }}></div>
                                        </div>
                                    </div>

                                    <div className="bg-surface-container-low/20 border border-outline-variant/30 rounded-xl p-3 flex flex-col gap-2">
                                        <div className="flex justify-between items-center text-xs">
                                            <span className="font-semibold text-on-surface-variant">Core Algorithms</span>
                                            <span className="text-primary font-bold bg-primary/5 px-2 py-0.5 rounded text-[10px]">{Math.max(0, report.matchScore - 4)}%</span>
                                        </div>
                                        <div className="w-full bg-surface-container-low h-1.5 rounded-full overflow-hidden">
                                            <div className="bg-gradient-to-r from-primary to-blue-500 h-full rounded-full" style={{ width: `${Math.max(0, report.matchScore - 4)}%` }}></div>
                                        </div>
                                    </div>

                                    <div className="bg-surface-container-low/20 border border-outline-variant/30 rounded-xl p-3 flex flex-col gap-2">
                                        <div className="flex justify-between items-center text-xs">
                                            <span className="font-semibold text-on-surface-variant">Scalability &amp; Performance</span>
                                            <span className="text-primary font-bold bg-primary/5 px-2 py-0.5 rounded text-[10px]">{Math.max(0, report.matchScore - 12)}%</span>
                                        </div>
                                        <div className="w-full bg-surface-container-low h-1.5 rounded-full overflow-hidden">
                                            <div className="bg-gradient-to-r from-primary to-blue-500 h-full rounded-full" style={{ width: `${Math.max(0, report.matchScore - 12)}%` }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Skill Gaps Widget */}
                            <div className="bg-surface-container-lowest border border-outline-variant/45 rounded-2xl p-6 flex flex-col gap-5 shadow-[0_4px_20px_rgba(0,0,0,0.015)]">
                                <div className="flex justify-between items-start">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-primary uppercase tracking-wider font-extrabold">Growth Areas</span>
                                        <h4 className="text-lg font-bold text-on-surface mt-0.5">Identified Gaps</h4>
                                    </div>
                                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold">
                                        Priority Focus
                                    </span>
                                </div>

                                {report.skillGaps && report.skillGaps.length > 0 ? (
                                    <div className="flex flex-col gap-4">
                                        {/* High Severity Gaps */}
                                        {report.skillGaps.filter(g => g.severity === 'high').length > 0 && (
                                            <div className="flex flex-col gap-2">
                                                <div className="flex items-center gap-1.5 border-b border-outline-variant/20 pb-1.5">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
                                                    <span className="text-[10px] text-red-700 dark:text-red-400 font-extrabold uppercase tracking-wider">Critical Focus</span>
                                                    <span className="text-[9px] text-on-surface-variant/60 font-semibold ml-auto">Immediate Action</span>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {report.skillGaps.filter(g => g.severity === 'high').map((gap, i) => (
                                                        <span
                                                            key={i}
                                                            className="px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 bg-error-container/30 border border-error-container/60 text-on-error-container shadow-[0_1px_2px_rgba(147,0,10,0.02)] transition-all hover:bg-error-container/50"
                                                        >
                                                            <ExclamationCircleIcon className="w-3.5 h-3.5 flex-shrink-0" />
                                                            {gap.skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Medium Severity Gaps */}
                                        {report.skillGaps.filter(g => g.severity === 'medium').length > 0 && (
                                            <div className="flex flex-col gap-2">
                                                <div className="flex items-center gap-1.5 border-b border-outline-variant/20 pb-1.5">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                                                    <span className="text-[10px] text-amber-700 dark:text-amber-400 font-extrabold uppercase tracking-wider">Secondary Focus</span>
                                                    <span className="text-[9px] text-on-surface-variant/60 font-semibold ml-auto">Recommended</span>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {report.skillGaps.filter(g => g.severity === 'medium').map((gap, i) => (
                                                        <span
                                                            key={i}
                                                            className="px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 bg-tertiary-fixed/30 border border-tertiary-fixed/60 text-on-tertiary-fixed shadow-[0_1px_2px_rgba(54,15,0,0.02)] transition-all hover:bg-tertiary-fixed/50"
                                                        >
                                                            <ArrowTrendingUpIcon className="w-3.5 h-3.5 flex-shrink-0" />
                                                            {gap.skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Low Severity Gaps */}
                                        {report.skillGaps.filter(g => g.severity === 'low').length > 0 && (
                                            <div className="flex flex-col gap-2">
                                                <div className="flex items-center gap-1.5 border-b border-outline-variant/20 pb-1.5">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                                    <span className="text-[10px] text-emerald-700 dark:text-emerald-400 font-extrabold uppercase tracking-wider">Minor Focus</span>
                                                    <span className="text-[9px] text-on-surface-variant/60 font-semibold ml-auto">Nice to Have</span>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {report.skillGaps.filter(g => g.severity === 'low').map((gap, i) => (
                                                        <span
                                                            key={i}
                                                            className="px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 bg-emerald-500/10 dark:bg-emerald-950/20 border border-emerald-500/20 dark:border-emerald-800/30 text-emerald-800 dark:text-emerald-300 shadow-[0_1px_2px_rgba(6,78,59,0.02)] transition-all hover:bg-emerald-500/20"
                                                        >
                                                            <CheckCircleIcon className="w-3.5 h-3.5 flex-shrink-0" />
                                                            {gap.skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <p className="text-xs text-on-surface-variant italic">No major skill gaps identified! Keep it up.</p>
                                )}

                                <div className="bg-surface-container-low/40 p-4 rounded-xl border border-outline-variant/30">
                                    <p className="text-xs text-on-surface-variant/90 italic leading-relaxed">
                                        "Recommended focus for the next 30 days: Deep-dive into identified gaps to meet high-level team expectations and optimize system reliability."
                                    </p>
                                </div>
                            </div>

                        </aside>
                    </div>
                )}

                {activeNav === 'behavioral' && (
                    <div className="flex-1 py-6 px-8 md:px-10 bg-background max-w-[1400px] mx-auto w-full flex flex-col gap-8 animate-fade-in">

                        {/* Executive AI Assessment Dashboard Header */}
                        <div className="bg-surface-container-lowest/90 backdrop-blur-md border border-outline-variant/40 rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 shadow-[0_8px_32px_-4px_rgba(0,0,0,0.02)] relative overflow-hidden">
                            {/* Glow background accent */}
                            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-indigo-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

                            <div className="flex flex-col gap-3 max-w-2xl">
                                <div className="flex flex-wrap items-center gap-2">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-extrabold uppercase tracking-wider">
                                        Executive Assessment
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/10 text-emerald-600 text-[10px] font-extrabold uppercase tracking-wider animate-pulse">
                                        Values Fit Verified
                                    </span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-primary via-blue-700 to-indigo-600 bg-clip-text text-transparent pb-0.5">
                                    Behavioral Insights
                                </h2>
                                <p className="text-on-surface-variant/80 text-sm leading-relaxed max-w-[600px] font-medium">
                                    AI-driven insights into leadership, adaptability, and communication.
                                </p>
                            </div>

                            {/* Metadata Details Card */}
                            <div className="w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col gap-3.5 min-w-[260px] bg-slate-50/60 p-5 rounded-xl border border-outline-variant/40 shadow-[0_1px_3px_rgba(0,0,0,0.01)] hover:border-primary/10 hover:bg-white transition-all duration-300">
                                <div className="flex items-center gap-2.5 text-xs">
                                    <div className="w-6 h-6 rounded bg-primary/5 text-primary flex items-center justify-center flex-shrink-0">
                                        <BriefcaseIcon className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="text-on-surface-variant/80 font-bold uppercase tracking-wider text-[9px]">Role:</span>
                                    <span className="text-slate-800 font-extrabold ml-auto">{report.title}</span>
                                </div>
                                <div className="h-[1px] bg-outline-variant/30 hidden sm:block lg:block" />
                                <div className="flex items-center gap-2.5 text-xs">
                                    <div className="w-6 h-6 rounded bg-slate-100 text-slate-500 flex items-center justify-center flex-shrink-0">
                                        <CalendarIcon className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="text-on-surface-variant/80 font-bold uppercase tracking-wider text-[9px]">Evaluation:</span>
                                    <span className="text-slate-800 font-extrabold ml-auto">
                                        {new Date(report.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Analytics Blocks (Bento Header Section) */}
                        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">

                            {/* Culture Fit Score */}
                            <motion.div
                                whileHover={{ y: -4, borderColor: 'rgba(0, 80, 180, 0.2)', boxShadow: '0 12px 24px -8px rgba(0, 80, 180, 0.08)' }}
                                transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
                                className="bg-surface-container-lowest border border-outline-variant/45 rounded-2xl p-6 flex flex-col justify-between shadow-[0_2px_12px_-4px_rgba(0,0,0,0.015)] relative group overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-2xl group-hover:opacity-100 transition-opacity" />
                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="w-8 h-8 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-300">
                                            <ShieldCheckIcon className="w-5 h-5" />
                                        </div>
                                        <span className="text-primary bg-primary/5 border border-primary/10 px-2 py-0.5 rounded text-[10px] font-bold">+4% vs last session</span>
                                    </div>
                                    <h3 className="text-xs text-on-surface-variant/80 uppercase tracking-wider font-extrabold">Culture Fit Score</h3>
                                    <p className="text-4xl font-extrabold text-on-surface mt-1.5">
                                        {Math.min(100, report.matchScore + 4)}<span className="text-lg font-bold opacity-60 ml-0.5">%</span>
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <div className="w-full bg-surface-container-low h-1.5 rounded-full overflow-hidden">
                                        <div
                                            className="bg-gradient-to-r from-primary to-blue-500 h-full rounded-full transition-all duration-1000"
                                            style={{ width: `${Math.min(100, report.matchScore + 4)}%` }}
                                        ></div>
                                    </div>
                                    <div className="flex justify-between items-center text-[10px] text-on-surface-variant/70 font-semibold mt-2.5">
                                        <span>Alignment Target: 85%</span>
                                        <span>Status: Strong Fit</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Confidence Index */}
                            <motion.div
                                whileHover={{ y: -4, borderColor: 'rgba(149, 54, 0, 0.2)', boxShadow: '0 12px 24px -8px rgba(149, 54, 0, 0.08)' }}
                                transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
                                className="bg-surface-container-lowest border border-outline-variant/45 rounded-2xl p-6 flex flex-col justify-between shadow-[0_2px_12px_-4px_rgba(0,0,0,0.015)] relative group overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-tertiary/5 to-transparent rounded-full blur-2xl group-hover:opacity-100 transition-opacity" />
                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="w-8 h-8 rounded-lg bg-tertiary/5 border border-tertiary/10 flex items-center justify-center text-tertiary group-hover:scale-105 transition-transform duration-300">
                                            <BoltIcon className="w-5 h-5" />
                                        </div>
                                        <span className="text-tertiary bg-tertiary/5 border border-tertiary/10 px-2 py-0.5 rounded text-[10px] font-bold">High Reliability</span>
                                    </div>
                                    <h3 className="text-xs text-on-surface-variant/80 uppercase tracking-wider font-extrabold">Confidence Index</h3>
                                    <p className="text-4xl font-extrabold text-on-surface mt-1.5">
                                        {report.matchScore}<span className="text-lg font-bold opacity-60 ml-0.5">%</span>
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <div className="w-full bg-surface-container-low h-1.5 rounded-full overflow-hidden">
                                        <div
                                            className="bg-gradient-to-r from-tertiary to-amber-500 h-full rounded-full transition-all duration-1000"
                                            style={{ width: `${report.matchScore}%` }}
                                        ></div>
                                    </div>
                                    <div className="flex justify-between items-center text-[10px] text-on-surface-variant/70 font-semibold mt-2.5">
                                        <span>Calibration Target: 80%</span>
                                        <span>Status: Verified</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Leadership Presence */}
                            <motion.div
                                whileHover={{ y: -4, borderColor: 'rgba(80, 95, 118, 0.2)', boxShadow: '0 12px 24px -8px rgba(80, 95, 118, 0.08)' }}
                                transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
                                className="bg-surface-container-lowest border border-outline-variant/45 rounded-2xl p-6 flex flex-col justify-between shadow-[0_2px_12px_-4px_rgba(0,0,0,0.015)] relative group overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-secondary/5 to-transparent rounded-full blur-2xl group-hover:opacity-100 transition-opacity" />
                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="w-8 h-8 rounded-lg bg-secondary/5 border border-secondary/10 flex items-center justify-center text-secondary group-hover:scale-105 transition-transform duration-300">
                                            <UserGroupIcon className="w-5 h-5" />
                                        </div>
                                        <span className="text-secondary bg-secondary/5 border border-secondary/10 px-2 py-0.5 rounded text-[10px] font-bold">Top 5% Applicants</span>
                                    </div>
                                    <h3 className="text-xs text-on-surface-variant/80 uppercase tracking-wider font-extrabold">Leadership Presence</h3>
                                    <p className="text-4xl font-extrabold text-on-surface mt-1.5">
                                        {report.matchScore >= 85 ? 'A+' : report.matchScore >= 75 ? 'A' : report.matchScore >= 65 ? 'B+' : 'B'}
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <div className="flex gap-1.5">
                                        <div className={`flex-1 h-1.5 rounded-full transition-all duration-500 ${report.matchScore >= 60 ? 'bg-secondary' : 'bg-surface-container'}`}></div>
                                        <div className={`flex-1 h-1.5 rounded-full transition-all duration-500 ${report.matchScore >= 70 ? 'bg-secondary' : 'bg-surface-container'}`}></div>
                                        <div className={`flex-1 h-1.5 rounded-full transition-all duration-500 ${report.matchScore >= 80 ? 'bg-secondary' : 'bg-surface-container'}`}></div>
                                        <div className={`flex-1 h-1.5 rounded-full transition-all duration-500 ${report.matchScore >= 90 ? 'bg-secondary' : 'bg-surface-container'}`}></div>
                                    </div>
                                    <div className="flex justify-between items-center text-[10px] text-on-surface-variant/70 font-semibold mt-2.5">
                                        <span>Scale: B to A+</span>
                                        <span>Status: Highly Capable</span>
                                    </div>
                                </div>
                            </motion.div>
                        </section>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                            {/* Question Breakdown Accordion list */}
                            <section className="lg:col-span-8 flex flex-col gap-6">
                                <div className="flex justify-between items-center mb-base border-b border-outline-variant pb-2">
                                    <h4 className="text-headline-md font-bold text-on-surface">Question Breakdown</h4>
                                    <span className="text-label-sm text-on-surface-variant bg-surface-container-high px-2.5 py-1 rounded-full font-semibold">
                                        {report.behavioralQuestions.length} Scenario Questions
                                    </span>
                                </div>

                                <div className="flex flex-col gap-4">
                                    {report.behavioralQuestions.map((q, index) => (
                                        <BehavioralAccordionCard key={index} item={q} index={index} />
                                    ))}
                                </div>
                            </section>

                            {/* Sidebar elements */}
                            <aside className="lg:col-span-4 flex flex-col gap-6 w-full lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto custom-scrollbar pr-1">

                                {/* AI Coach Summary Card */}
                                <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm overflow-hidden flex flex-col hover:shadow-md hover:border-primary/10 transition-all duration-300">
                                    <div className="py-3 px-4 border-b border-outline-variant/60 bg-gradient-to-r from-surface-bright/50 to-surface-container-lowest">
                                        <div className="flex justify-between items-center gap-2">
                                            <h5 className="text-sm font-bold text-slate-800 tracking-tight">
                                                {report.matchScore >= 80 ? 'Excellent Ownership' : 'Strong Alignment'}
                                            </h5>
                                            <span className="bg-primary/5 text-primary border border-primary/15 px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider select-none flex-shrink-0">
                                                Grade A
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-4 flex flex-col gap-4">
                                        {/* Overall Feedback */}
                                        <div className="flex flex-col gap-1.5">
                                            <div className="flex items-center gap-1.5 border-b border-outline-variant/20 pb-1 select-none">
                                                <span className="text-[9px] font-extrabold uppercase tracking-widest text-on-surface-variant/80">Overall Feedback</span>
                                            </div>
                                            <p className="text-xs leading-relaxed text-slate-600 font-medium max-w-[280px]">
                                                Your narrative structures show clear <span className="font-semibold text-primary">situational ownership</span>. You demonstrate high compatibility with core values such as ownership, conflict resolution, and structured logic.
                                            </p>
                                        </div>

                                        {/* Key Strengths */}
                                        <div className="flex flex-col gap-2">
                                            <div className="flex items-center gap-1.5 border-b border-outline-variant/20 pb-1 select-none">
                                                <span className="text-[9px] font-extrabold uppercase tracking-widest text-on-surface-variant/80">Key Strengths</span>
                                            </div>
                                            <ul className="flex flex-col gap-2 text-xs text-slate-600 font-medium">
                                                <li className="flex items-start gap-2 max-w-[280px]">
                                                    <div className="w-4 h-4 rounded bg-emerald-500/5 text-emerald-600 border border-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                        <CheckIcon className="w-2.5 h-2.5 stroke-[4.5]" />
                                                    </div>
                                                    <span className="leading-normal text-[11px]">
                                                        <strong className="text-slate-800 font-bold">Conflict Resolution:</strong> High emotional intelligence in navigating complex team conflicts.
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2 max-w-[280px]">
                                                    <div className="w-4 h-4 rounded bg-emerald-500/5 text-emerald-600 border border-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                        <CheckIcon className="w-2.5 h-2.5 stroke-[4.5]" />
                                                    </div>
                                                    <span className="leading-normal text-[11px]">
                                                        <strong className="text-slate-800 font-bold">Business Alignment:</strong> Articulates macro business impact alongside core engineering tasks.
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2 max-w-[280px]">
                                                    <div className="w-4 h-4 rounded bg-emerald-500/5 text-emerald-600 border border-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                        <CheckIcon className="w-2.5 h-2.5 stroke-[4.5]" />
                                                    </div>
                                                    <span className="leading-normal text-[11px]">
                                                        <strong className="text-slate-800 font-bold">Accountability &amp; Grit:</strong> Personal ownership for project outcomes and failures.
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                )}

                {activeNav === 'roadmap' && (
                    <div className="flex-1 py-6 px-8 md:px-10 bg-background max-w-[1400px] mx-auto w-full flex flex-col gap-8 animate-fade-in">

                        {/* Page header and progress bar */}
                        <section className="bg-surface-container-lowest border border-outline-variant/45 p-8 rounded-2xl shadow-sm">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-md">
                                <div>
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-extrabold uppercase tracking-wider mb-2">
                                        Preparation Velocity
                                    </span>
                                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-primary via-blue-700 to-indigo-600 bg-clip-text text-transparent pb-1">
                                        {report.preparationPlan.length}-Day Study Plan
                                    </h2>
                                    <p className="text-on-surface-variant/80 text-body-sm max-w-[560px] mt-1 leading-relaxed">
                                        A personalized milestone checklist compiled from the job requirements and your current profile. Clearing these steps builds full competency.
                                    </p>
                                </div>

                                <div className="bg-surface-container-low p-md rounded-xl flex items-center gap-lg border border-outline-variant/30 flex-shrink-0">
                                    <div className="relative w-20 h-20">
                                        <svg className="w-full h-full -rotate-90">
                                            <circle
                                                className="text-surface-container-high"
                                                cx="40"
                                                cy="40"
                                                fill="transparent"
                                                r="34"
                                                stroke="currentColor"
                                                strokeWidth="6"
                                            />
                                            <circle
                                                className="text-primary transition-all duration-1000 ease-out"
                                                cx="40"
                                                cy="40"
                                                fill="transparent"
                                                r="34"
                                                stroke="currentColor"
                                                strokeDasharray="213.6"
                                                strokeDashoffset={213.6 - (progressPct / 100) * 213.6}
                                                strokeWidth="6"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-lg font-bold text-primary">{progressPct}%</span>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-xs text-on-surface-variant font-bold uppercase tracking-wider">Cleared Progress</p>
                                        <p className="text-headline-sm font-extrabold text-on-surface mt-0.5">{completedCount}/{totalTasks} Tasks</p>
                                        <span className="text-[10px] text-primary font-semibold block mt-1">
                                            {progressPct === 100 ? '🎉 Roadmap completed!' : 'Streak active: keep learning!'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                            {/* Main timeline of preparation plan */}
                            <div className="lg:col-span-8 space-y-3 relative">
                                {report.preparationPlan.map((day, dIdx) => {
                                    const dayTasksLength = day.tasks.length
                                    const dayCompletedCount = day.tasks.filter((_, tIdx) => !!completedTasks[`${day.day}-${tIdx}`]).length

                                    const isFullyCompleted = dayCompletedCount === dayTasksLength
                                    const isInProgress = dayCompletedCount > 0 && dayCompletedCount < dayTasksLength
                                    const isActive = dIdx === activeDayIdx || (activeDayIdx === -1 && dIdx === report.preparationPlan.length - 1)
                                    const isExpanded = expandedRoadmapDays[day.day] !== undefined ? expandedRoadmapDays[day.day] : isActive

                                    const totalMins = day.tasks.length * 45
                                    const formatPrepTime = (mins) => {
                                        const hrs = Math.floor(mins / 60)
                                        const rem = mins % 60
                                        if (hrs === 0) return `${rem}m prep`
                                        if (rem === 0) return `${hrs}h prep`
                                        return `${hrs}h ${rem}m prep`
                                    }

                                    return (
                                        <div key={day._id || day.day} className="relative pl-10 pb-3 last:pb-0">
                                            {dIdx < report.preparationPlan.length - 1 && (
                                                <div className="absolute left-[18px] top-10 bottom-[-20px] w-[4px] bg-slate-100 dark:bg-slate-800/40 rounded-full z-0 overflow-hidden">
                                                    <div
                                                        className={`w-full rounded-full transition-all duration-700 ease-in-out ${isFullyCompleted
                                                                ? 'bg-primary shadow-[0_0_10px_rgba(37,99,235,0.6)]'
                                                                : 'bg-gradient-to-b from-primary via-primary/70 to-primary/20'
                                                            }`}
                                                        style={{
                                                            height: isFullyCompleted
                                                                ? '100%'
                                                                : isInProgress
                                                                    ? `${(dayCompletedCount / dayTasksLength) * 100}%`
                                                                    : '0%'
                                                        }}
                                                    />
                                                </div>
                                            )}

                                            <div className={`absolute left-1 top-2 w-8 h-8 flex items-center justify-center rounded-full z-10 transition-all duration-500 border ${isFullyCompleted
                                                    ? 'bg-primary text-white border-primary shadow-[0_0_12px_rgba(37,99,235,0.35)]'
                                                    : isActive || isInProgress
                                                        ? 'bg-surface-container-lowest text-primary border-primary shadow-[0_0_8px_rgba(37,99,235,0.15)]'
                                                        : 'bg-surface-container-lowest text-on-surface-variant/40 border border-outline-variant/40'
                                                }`}>
                                                {isFullyCompleted ? (
                                                    <CheckIcon className="w-4 h-4 stroke-[3.5]" />
                                                ) : isActive || isInProgress ? (
                                                    <span className="relative flex h-3 w-3 items-center justify-center">
                                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/20 opacity-75"></span>
                                                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
                                                    </span>
                                                ) : (
                                                    <span className="text-[10px] font-bold font-mono tracking-tight text-on-surface-variant/50">
                                                        {(dIdx + 1).toString().padStart(2, '0')}
                                                    </span>
                                                )}
                                            </div>

                                            <div className={`transition-all duration-500 rounded-xl border overflow-hidden ${isFullyCompleted
                                                    ? 'border-outline-variant/60 bg-surface-container-lowest opacity-90'
                                                    : isActive || isInProgress
                                                        ? 'border-primary/35 bg-gradient-to-br from-primary/[0.03] to-surface-container-lowest shadow-[0_4px_20px_rgba(37,99,235,0.06)] dark:shadow-[0_4px_20px_rgba(37,99,235,0.15)]'
                                                        : 'border-outline-variant/40 bg-surface-container-lowest'
                                                }`}>
                                                {/* Expandable Module Header */}
                                                <div
                                                    onClick={() => toggleRoadmapDay(day.day, isActive)}
                                                    className="flex justify-between items-center cursor-pointer select-none py-3 px-5 hover:bg-slate-50/20 transition-colors"
                                                >
                                                    <div className="flex-1 min-w-0 pr-4">
                                                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                                                            <span className="text-body-sm font-extrabold uppercase tracking-wider text-primary">Day {day.day}</span>
                                                            <span className="text-xs text-on-surface-variant/40 select-none">&bull;</span>
                                                            <span className="text-body-md font-bold text-on-surface truncate">{day.focus}</span>
                                                        </div>
                                                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mt-2 text-[11px] text-on-surface-variant/70 font-semibold select-none">
                                                            <div className="flex items-center gap-1">
                                                                <CalendarIcon className="w-3.5 h-3.5 opacity-80" />
                                                                <span>{formatPrepTime(totalMins)}</span>
                                                            </div>
                                                            <span className="text-on-surface-variant/30 font-light hidden sm:inline">|</span>
                                                            <div className="flex items-center gap-1.5">
                                                                <CheckCircleIcon className="w-3.5 h-3.5 opacity-80 text-primary/80" />
                                                                <span>{dayCompletedCount}/{dayTasksLength} Completed</span>
                                                                <span className="text-on-surface-variant/30 font-light">&bull;</span>
                                                                <div className="w-16 h-1 bg-slate-100 dark:bg-slate-800/80 rounded-full overflow-hidden select-none">
                                                                    <div
                                                                        className={`h-full rounded-full transition-all duration-500 ${isFullyCompleted ? 'bg-primary shadow-[0_0_4px_rgba(37,99,235,0.4)]' : 'bg-primary/70'}`}
                                                                        style={{ width: `${dayTasksLength > 0 ? (dayCompletedCount / dayTasksLength) * 100 : 0}%` }}
                                                                    />
                                                                </div>
                                                                <span className="text-[10px] font-bold text-primary">{dayTasksLength > 0 ? Math.round((dayCompletedCount / dayTasksLength) * 100) : 0}%</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center gap-3 flex-shrink-0">
                                                        {isFullyCompleted ? (
                                                            <span className="inline-flex items-center gap-1 bg-emerald-500/[0.06] border border-emerald-500/15 text-emerald-600 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider select-none">
                                                                <CheckIcon className="w-3 h-3 stroke-[3.5]" />
                                                                Milestone Cleared
                                                            </span>
                                                        ) : (
                                                            <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full select-none ${isActive || isInProgress
                                                                    ? 'bg-primary/10 text-primary border border-primary/10'
                                                                    : 'bg-surface-container-high text-on-surface-variant border border-outline-variant/20'
                                                                }`}>
                                                                {isInProgress ? 'In Progress' : 'Pending'}
                                                            </span>
                                                        )}
                                                        <ChevronDownIcon
                                                            className={`w-4 h-4 text-on-surface-variant transition-transform duration-300 ${isExpanded ? 'rotate-180 text-primary' : ''
                                                                }`}
                                                        />
                                                    </div>
                                                </div>

                                                {/* Expandable Module Content */}
                                                <AnimatePresence initial={false}>
                                                    {isExpanded && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                                                            className="overflow-hidden border-t border-outline-variant/30"
                                                        >
                                                            <div className="px-5 pb-3.5 pt-1.5 space-y-1.5 bg-surface-container-lowest/40">
                                                                {day.tasks.map((task, tIdx) => {
                                                                    const isChecked = !!completedTasks[`${day.day}-${tIdx}`]
                                                                    return (
                                                                        <motion.div
                                                                            key={tIdx}
                                                                            onClick={() => toggleTask(day.day, tIdx)}
                                                                            whileHover={{ x: isChecked ? 0 : 3, borderColor: isChecked ? 'rgba(37, 99, 235, 0.15)' : 'rgba(37, 99, 235, 0.25)' }}
                                                                            transition={{ duration: 0.2, ease: "easeOut" }}
                                                                            className={`relative flex items-center gap-4 py-2.5 px-4 pl-5.5 rounded-xl border transition-all cursor-pointer select-none ${isChecked
                                                                                ? 'bg-slate-50/40 dark:bg-slate-900/10 border-slate-200/40 dark:border-slate-800/30 opacity-75'
                                                                                : 'border-outline-variant/40 bg-surface-container-lowest shadow-sm hover:shadow-[0_4px_12px_rgba(37,99,235,0.03)]'
                                                                                }`}
                                                                        >
                                                                            {/* Left active line indicator */}
                                                                            <div className={`absolute left-0 top-2.5 bottom-2.5 w-[3px] rounded-r transition-all duration-300 ${isChecked ? 'bg-primary' : 'bg-transparent'
                                                                                }`} />

                                                                            <div className="relative flex-shrink-0">
                                                                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-300 ${isChecked
                                                                                    ? 'bg-primary border-primary text-white shadow-[0_2px_8px_rgba(37,99,235,0.25)]'
                                                                                    : 'border-slate-300 dark:border-slate-700 bg-white hover:border-primary'
                                                                                    }`}>
                                                                                    <CheckIcon className={`w-3.5 h-3.5 stroke-[4] transition-opacity duration-300 ${isChecked ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} />
                                                                                </div>
                                                                            </div>

                                                                            <span className={`font-body-md text-sm flex-grow leading-relaxed transition-all duration-300 ${isChecked
                                                                                    ? 'line-through text-on-surface-variant/70 font-medium'
                                                                                    : 'text-on-surface font-semibold'
                                                                                }`}>
                                                                                {task}
                                                                            </span>
                                                                        </motion.div>
                                                                    )
                                                                })}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                            {/* Sidebar study cards */}
                            <div className="lg:col-span-4 space-y-6 w-full lg:sticky lg:top-24 lg:self-start">

                                {/* Live AI Progress Tracker */}
                                {(() => {
                                    const getRoadmapCoachAdvice = () => {
                                        if (progressPct === 0) return "Select Day 1 above and check off completed topics to kickstart your preparation velocity."
                                        if (progressPct === 100) return "Fantastic job! All milestones are cleared. You are fully prepared to dominate this interview role."
                                        if (progressPct < 40) return "You're building early momentum. Reviewing daily focus cards consistently raises your match score."
                                        if (progressPct < 80) return "Great progress! You are entering the core competencies phase. Keep clearing milestones."
                                        return "Almost there! Polish the remaining milestones to lock in full competency."
                                    }

                                    return (
                                        <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 shadow-sm relative overflow-hidden">
                                            {/* Top dynamic status badge */}
                                            <div className="flex items-center justify-between mb-5 select-none">
                                                <span className="px-2 py-0.5 rounded bg-primary/5 border border-primary/15 text-[10px] font-bold text-primary uppercase tracking-wider">
                                                    AI Tracker Live
                                                </span>
                                                <span className="inline-flex items-center text-[10px] text-emerald-600 font-bold uppercase tracking-wider">
                                                    <span className="relative flex h-1.5 w-1.5 mr-1.5">
                                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                                                    </span>
                                                    Sync Active
                                                </span>
                                            </div>

                                            {/* Progress Stats */}
                                            <div className="space-y-2">
                                                <div className="flex justify-between items-baseline">
                                                    <h4 className="text-xs font-extrabold text-on-surface uppercase tracking-wider">ROADMAP COMPLETION</h4>
                                                    <span className="text-xl font-black text-primary">{progressPct}%</span>
                                                </div>
                                                <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full w-full overflow-hidden shadow-inner relative">
                                                    <div
                                                        className="h-full bg-gradient-to-r from-primary via-blue-600 to-indigo-500 rounded-full transition-all duration-1000 shadow-[0_0_8px_rgba(37,99,235,0.35)]"
                                                        style={{ width: `${progressPct}%` }}
                                                    ></div>
                                                </div>
                                                <div className="flex justify-between text-[10px] text-on-surface-variant font-bold">
                                                    <span>{completedCount} OF {totalTasks} COMPLETED</span>
                                                    <span>{totalTasks - completedCount} REMAINING</span>
                                                </div>
                                            </div>

                                            {/* Active Prep Streak */}
                                            <div className="flex items-center gap-4 mt-6 p-4 rounded-xl bg-slate-50/50 dark:bg-slate-900/30 border border-slate-200/30 dark:border-slate-800/20">
                                                <div className="w-11 h-11 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 relative flex-shrink-0">
                                                    <div className="absolute inset-0 bg-amber-500/10 blur-sm rounded-lg animate-pulse"></div>
                                                    <BoltIcon className="w-5.5 h-5.5 fill-current relative z-10" />
                                                </div>
                                                <div>
                                                    <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider select-none">PREPARATION STREAK</p>
                                                    <div className="flex items-baseline gap-0.5 mt-0.5 select-none">
                                                        <span className="text-lg font-black text-on-surface">
                                                            {completedCount > 0 ? Math.ceil(completedCount / 2) : 1}
                                                        </span>
                                                        <span className="text-xs text-on-surface-variant/80 font-bold pl-1">days active</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Dynamic AI Advisor Tip */}
                                            <div className="mt-5 pt-4 border-t border-outline-variant/30 flex gap-2.5 items-start">
                                                <LightBulbIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                                <p className="text-xs text-on-surface-variant leading-relaxed font-semibold">
                                                    {getRoadmapCoachAdvice()}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })()}

                                {/* Prep Resources */}
                                <div className="bg-gradient-to-br from-surface-container-lowest via-surface-container-lowest to-slate-50/50 dark:to-slate-950/20 border border-outline-variant rounded-2xl p-6 shadow-sm">
                                    <div className="mb-4 select-none">
                                        <div className="flex items-center gap-2">
                                            <span className="px-2 py-0.5 rounded bg-primary/5 border border-primary/15 text-[10px] font-bold text-primary uppercase tracking-wider">
                                                Assets
                                            </span>
                                            <h4 className="text-xs font-extrabold text-on-surface uppercase tracking-wider">Prep Resources</h4>
                                        </div>
                                        <p className="text-[10px] text-on-surface-variant/70 font-semibold mt-1 leading-relaxed">
                                            Personalized strategy assets compiled from your assessment results.
                                        </p>
                                    </div>

                                    <div className="space-y-3">
                                        <a
                                            onClick={(e) => { e.preventDefault(); getResumePdf(interviewId); }}
                                            className="group flex items-center gap-3.5 p-3 bg-surface-container-lowest hover:bg-slate-50/40 dark:hover:bg-slate-900/20 rounded-xl border border-outline-variant/50 hover:border-primary/30 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-[0_6px_20px_-6px_rgba(37,99,235,0.08)] hover:-translate-y-0.5"
                                        >
                                            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                                                <DocumentTextIcon className="w-5 h-5 stroke-[2]" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-xs font-bold text-on-surface">Tailored Resume (PDF)</p>
                                                <p className="text-[10px] text-on-surface-variant/90 font-medium mt-0.5 truncate">Optimized CV tailored for this role</p>
                                            </div>
                                            <div className="w-7 h-7 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 flex-shrink-0 shadow-sm">
                                                <ArrowDownTrayIcon className="w-3.5 h-3.5 stroke-[2.5]" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Page Footer */}
                <footer className="mt-auto py-5 px-margin-desktop bg-surface-container-lowest border-t border-outline-variant/30 text-[11px] text-on-surface-variant/80">
                    <div className="max-w-max-width mx-auto flex flex-col md:flex-row items-center justify-between gap-y-4">
                        {/* Left: Branding & Status */}
                        <div className="flex flex-col sm:flex-row items-center gap-3">
                            <div className="flex items-center gap-2">
                                <LogoIcon className="w-5.5 h-5.5 text-on-surface" />
                                <span className="font-semibold text-on-surface tracking-tight text-sm">HireStack</span>
                            </div>
                            <span className="hidden sm:inline text-outline-variant/60 font-light">|</span>
                            <div className="flex items-center gap-1.5 bg-emerald-500/5 border border-emerald-500/10 px-2 py-0.5 rounded-full text-emerald-600 font-semibold text-[10px] select-none">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                All Systems Operational
                            </div>
                        </div>

                        {/* Right: Navigation Links & AI Credit */}
                        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-medium">
                            <a
                                href="#/"
                                className="text-on-surface-variant hover:text-primary transition-colors duration-200"
                                onClick={(e) => { e.preventDefault(); navigate('/'); }}
                            >
                                Dashboard
                            </a>
                            <span className="text-on-surface-variant/20 select-none">&bull;</span>
                            <a
                                href="#/"
                                className="text-on-surface-variant hover:text-primary transition-colors duration-200"
                                onClick={(e) => { e.preventDefault(); }}
                            >
                                Privacy Policy
                            </a>
                            <span className="text-on-surface-variant/20 select-none">&bull;</span>
                            <a
                                href="#/"
                                className="text-on-surface-variant hover:text-primary transition-colors duration-200"
                                onClick={(e) => { e.preventDefault(); }}
                            >
                                Terms of Service
                            </a>
                            <span className="text-on-surface-variant/20 select-none">&bull;</span>
                            <a
                                href="#/"
                                className="text-on-surface-variant hover:text-primary transition-colors duration-200"
                                onClick={(e) => { e.preventDefault(); }}
                            >
                                Help Center
                            </a>
                            <span className="hidden sm:inline text-outline-variant/60 font-light select-none">|</span>
                            <div className="flex items-center gap-1 text-on-surface-variant/90 select-none">
                                <span>Powered by</span>
                                <span className="font-semibold bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                                    Gemini AI
                                </span>
                            </div>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    )
}

export default Interview