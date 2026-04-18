import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  Users, MessageSquare, Calendar, Layout, Settings, Bell, 
  FileText, Shield, LogOut, Grid, 
  Menu, Activity, 
  Filter, X, 
} from 'lucide-react';
import { useLanguage } from '@/demos/standard/context/LanguageContext';

// Import extracted components
import { Toast } from '../components/dashboard/Toast';
import { TopBar } from '../components/dashboard/TopBar';
import { ParentDashboard } from '../components/dashboard/ParentDashboard';
import { AdminHomeView } from '../components/dashboard/AdminHomeView';
import { CmsEditor } from '../components/dashboard/CmsEditor';

const Dashboard: React.FC = () => {
  const { language } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const isEn = language === 'en';
  
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isWaffleOpen, setIsWaffleOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeAdminTab, setActiveAdminTab] = useState('home');
  const [activeTeamsSidebar, setActiveTeamsSidebar] = useState('teams');
  const [activeTeamsContent, setActiveTeamsContent] = useState('posts');
  const [toast, setToast] = useState<string | null>(null);

  // Simulated Teams Data
  const teamsPosts = [
    { id: 1, user: "Dr. Roberto García", role: "Headmaster", time: "2h ago", text: isEn ? "Welcome back to the second term! Remember to check the updated safety protocols in the Files section." : "¡Bienvenidos al segundo periodo! Recuerden revisar los protocolos de seguridad actualizados en la sección de Archivos.", likes: 12 },
    { id: 2, user: "Admin System", role: "Security", time: "5h ago", text: isEn ? "New identity integration complete. Your SSO login is now active for all portals." : "Integración de identidad completada. Su inicio de sesión SSO ya está activo para todos los portales.", likes: 45 },
    { id: 3, user: "Sarah Jenkins", role: "Teacher", time: "Yesterday", text: isEn ? "Physics Lab: Please submit your reports by Friday 4PM. No exceptions." : "Lab de Física: Por favor entreguen sus reportes antes del viernes 4PM. Sin excepciones.", likes: 8 }
  ];

  const teamsAssignments = [
    { id: 1, title: isEn ? "History Essay: Digital Sovereignty" : "Ensayo de Historia: Soberanía Digital", due: "Feb 28", points: "100/100", status: "Assigned" },
    { id: 2, title: isEn ? "Math Quiz: Calculus III" : "Examen Matemáticas: Cálculo III", due: "Mar 05", points: "50/50", status: "Pending" },
    { id: 3, title: isEn ? "Science Fair Proposal" : "Propuesta Feria de Ciencias", due: "Mar 15", points: "10/10", status: "Not Started" }
  ];
  
  const [originalRole] = useState(location.state?.role || 'admin');
  const [currentRole, setCurrentRole] = useState(location.state?.role || 'admin');
  const email = location.state?.email || 'admin@colegioids.com';

  const getTeamsList = () => {
    if (originalRole === 'admin') return [{ id: 'ids', name: "Colegio IDS", sub: "Global Admin", color: "bg-vault-darkBlue" }];
    if (originalRole === 'teacher') return [
        { id: '10a', name: "Year 10A - Science", sub: "Class Group", color: "bg-emerald-600" },
        { id: 'faculty', name: "Faculty Hub", sub: "Staff Room", color: "bg-vault-blue" },
        { id: 'secondary', name: "Secondary Dept", sub: "Coordination", color: "bg-[#8B0000]" }
    ];
    return [
        { id: 'math', name: "Mathematics", sub: "Subject", color: "bg-blue-600" },
        { id: 'history', name: "Global History", sub: "Subject", color: "bg-orange-600" },
        { id: 'arts', name: "Digital Arts", sub: "Elective", color: "bg-purple-600" },
        { id: 'class26', name: "Class of 2026", sub: "Community", color: "bg-vault-yellow" }
    ];
  };

  const [selectedTeam, setSelectedTeam] = useState(getTeamsList()[0]);

  const onAppSwitch = (role: string) => {
    setCurrentRole(role);
    setIsWaffleOpen(false);
    setIsSidebarOpen(false);
  };

  const showToastMsg = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [activeAdminTab, activeTeamsSidebar, currentRole]);

  if (currentRole === 'alumni') {
    return (
        <div className="flex flex-col h-screen bg-[#f8fafc] font-sans overflow-hidden">
            <TopBar 
                title={isEn ? "Alumni Career Portal" : "Portal de Egresados"}
                color="#ea580c" isEn={isEn} email={email}
                isWaffleOpen={isWaffleOpen} setIsWaffleOpen={setIsWaffleOpen}
                isProfileOpen={isProfileOpen} setIsProfileOpen={setIsProfileOpen}
                onLogout={() => navigate('/demos/standard/login')}
                onAppSwitch={onAppSwitch} originalRole={originalRole} showToast={showToastMsg}
                toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
            />
            <Toast message={toast} isEn={isEn} />
            <main className="flex-grow overflow-y-auto p-6 md:p-12 space-y-10 max-w-6xl mx-auto w-full">
                <header className="space-y-2">
                    <h2 className="text-4xl font-black text-vault-darkBlue uppercase tracking-tighter italic">{isEn ? 'Institutional Networking' : 'Red Institucional'}</h2>
                    <p className="text-gray-500 font-medium">{isEn ? 'Connect with fellow graduates and explore career opportunities.' : 'Conecte con otros egresados y explore oportunidades.'}</p>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-[2.5rem] border-2 border-orange-100 shadow-xl space-y-6">
                        <h3 className="text-lg font-black text-vault-darkBlue uppercase tracking-widest">{isEn ? 'Internal Job Board' : 'Bolsa de Trabajo'}</h3>
                        <div className="space-y-4">
                            {[
                                { title: "Junior Software Engineer", company: "TechCorp Mexico", type: "Full-time" },
                                { title: "Academic Coordinator", company: "Colegio IDS", type: "Full-time" }
                            ].map((job, i) => (
                                <div key={i} className="p-4 bg-orange-50 rounded-xl flex justify-between items-center group cursor-pointer hover:bg-orange-100 transition-all">
                                    <div>
                                        <p className="font-bold text-gray-800">{job.title}</p>
                                        <p className="text-xs text-orange-600 font-bold">{job.company}</p>
                                    </div>
                                    <ChevronRight size={16} className="text-orange-300" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-vault-darkBlue p-8 rounded-[2.5rem] text-white flex flex-col justify-between relative overflow-hidden group">
                        <div className="relative z-10 space-y-4">
                            <h3 className="text-xl font-black text-vault-yellow uppercase tracking-widest">{isEn ? 'Directory' : 'Directorio'}</h3>
                            <p className="text-sm text-blue-100 opacity-80">{isEn ? 'Search for alumni by year, major, or industry.' : 'Busque egresados por año, carrera o industria.'}</p>
                            <button className="px-6 py-2 bg-vault-yellow text-vault-darkBlue rounded-lg font-black uppercase text-[10px] tracking-widest">{isEn ? 'Access Directory' : 'Acceder'}</button>
                        </div>
                        <Users className="absolute right-[-20px] bottom-[-40px] w-48 h-48 opacity-10" />
                    </div>
                </div>
            </main>
        </div>
    );
  }

  if (currentRole === 'parent') {
    return (
        <div className="flex flex-col h-screen bg-[#f8fafc] font-sans overflow-hidden">
            <TopBar 
                title={isEn ? "Parent Portal" : "Portal de Padres"}
                color="#10b981" isEn={isEn} email={email}
                isWaffleOpen={isWaffleOpen} setIsWaffleOpen={setIsWaffleOpen}
                isProfileOpen={isProfileOpen} setIsProfileOpen={setIsProfileOpen}
                onLogout={() => navigate('/demos/standard/login')}
                onAppSwitch={onAppSwitch} originalRole={originalRole} showToast={showToastMsg}
                toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
            />
            <Toast message={toast} isEn={isEn} />
            <main className="flex-grow overflow-y-auto">
                <ParentDashboard isEn={isEn} activeTab="home" setActiveTab={() => {}} />
            </main>
        </div>
    );
  }

  if (currentRole === 'admin' && originalRole === 'admin') {
    return (
      <div className="flex flex-col h-screen bg-[#f3f2f1] font-sans overflow-hidden">
        <TopBar 
            title={isEn ? "Admin Center" : "Centro de Administración"} 
            isEn={isEn} email={email} 
            isWaffleOpen={isWaffleOpen} setIsWaffleOpen={setIsWaffleOpen}
            isProfileOpen={isProfileOpen} setIsProfileOpen={setIsProfileOpen}
            onLogout={() => navigate('/demos/standard/login')}
            onAppSwitch={onAppSwitch}
            originalRole={originalRole}
            showToast={showToastMsg}
            toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        <Toast message={toast} isEn={isEn} />
        <div className="flex flex-grow overflow-hidden relative">
          <aside className={`fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200 z-50 transform transition-transform duration-300 md:relative md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="p-4 border-b border-gray-100 flex justify-between items-center md:hidden bg-gray-50">
                <span className="font-black text-xs text-gray-400 uppercase tracking-widest">Navigation</span>
                <button onClick={() => setIsSidebarOpen(false)} className="text-gray-400 hover:text-[#8B0000] transition-colors"><X size={20} /></button>
            </div>
            <nav className="py-4 px-2 space-y-1">
              {['home', 'users', 'security', 'cms', 'health', 'settings'].map(id => (
                <div key={id} onClick={() => setActiveAdminTab(id)} className={`flex items-center gap-4 p-3 rounded-md cursor-pointer ${activeAdminTab === id ? 'bg-blue-50 text-[#0078d4] font-bold border-l-4 border-[#0078d4]' : 'text-gray-600 hover:bg-gray-100'}`}>
                  {id === 'home' && <Layout size={18} />} {id === 'users' && <Users size={18} />} {id === 'security' && <Shield size={18} />} {id === 'cms' && <FileText size={18} />} {id === 'health' && <Activity size={18} />} {id === 'settings' && <Settings size={18} />}
                  <span className="text-sm capitalize">{id === 'cms' ? 'Web CMS' : id}</span>
                </div>
              ))}
            </nav>
          </aside>
          {isSidebarOpen && <div className="fixed inset-0 bg-black/20 z-40 md:hidden" onClick={() => setIsSidebarOpen(false)}></div>}
          <main className="flex-grow overflow-y-auto p-6 md:p-12">
            {activeAdminTab === 'home' && <AdminHomeView isEn={isEn} setActiveAdminTab={setActiveAdminTab} />}
            {activeAdminTab === 'cms' && <CmsEditor isEn={isEn} />}
            {activeAdminTab !== 'home' && activeAdminTab !== 'cms' && <div className="bg-white p-6 md:p-10 rounded shadow-sm border border-gray-200 animate-fade-in"><h2 className="text-xl font-bold uppercase tracking-tight mb-4">{activeAdminTab} Module</h2><div className="h-40 bg-gray-50 flex items-center justify-center border-2 border-dashed border-gray-200 text-gray-400 font-mono text-[10px]">SYSTEM_LOG: {activeAdminTab.toUpperCase()} ACTIVE</div></div>}
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-white font-sans overflow-hidden">
      <TopBar
        title={isEn ? "Teacher Portal" : "Portal Docente"} color="#464775"        isEn={isEn} email={email}
        isWaffleOpen={isWaffleOpen} setIsWaffleOpen={setIsWaffleOpen}
        isProfileOpen={isProfileOpen} setIsProfileOpen={setIsProfileOpen}
        onLogout={() => navigate('/demos/standard/login')}
        onAppSwitch={onAppSwitch}
        originalRole={originalRole}
        showToast={showToastMsg}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <Toast message={toast} isEn={isEn} />
      <div className="flex flex-grow overflow-hidden relative">
        <div className={`fixed inset-y-0 left-0 w-20 md:w-16 bg-[#33344a] flex flex-col items-center py-4 gap-6 text-gray-300 z-[55] transform transition-transform duration-300 md:relative md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <button onClick={() => setIsSidebarOpen(false)} className="md:hidden self-end px-4 mb-4 text-white/40"><X size={20} /></button>
          {['activity', 'chat', 'teams', 'assignments', 'calendar'].map(id => (
            <div key={id} onClick={() => setActiveTeamsSidebar(id)} className={`p-2 cursor-pointer transition-all flex flex-col items-center gap-1 w-full ${activeTeamsSidebar === id ? 'text-white bg-[#464775] border-l-4 border-white' : 'hover:text-white'}`}>
                {id === 'activity' && <Bell size={22} />} {id === 'chat' && <MessageSquare size={22} />} {id === 'teams' && <Users size={22} />} {id === 'assignments' && <FileText size={22} />} {id === 'calendar' && <Calendar size={22} />}
                <span className="text-[8px] font-bold uppercase">{id}</span>
            </div>
          ))}
        </div>
        
        {isSidebarOpen && <div className="fixed inset-0 bg-black/20 z-50 md:hidden" onClick={() => setIsSidebarOpen(false)}></div>}

        <aside className="hidden lg:flex w-64 bg-[#f0f0f0] border-r border-gray-200 flex flex-col shrink-0 overflow-y-auto">
            <header className="h-12 flex items-center px-4 justify-between shrink-0 border-b border-gray-200 bg-gray-50"><span className="font-black text-[10px] text-gray-500 uppercase tracking-widest">{activeTeamsSidebar}</span><Filter size={14} /></header>
            <div className="py-2">
                {activeTeamsSidebar === 'teams' && getTeamsList().map(team => (
                    <div key={team.id} onClick={() => setSelectedTeam(team)} className={`px-4 py-4 cursor-pointer flex items-center gap-3 border-b border-gray-100 mx-2 mb-2 rounded-md ${selectedTeam.id === team.id ? 'bg-white shadow-sm border-l-4 border-[#464775]' : 'hover:bg-gray-200 opacity-70'}`}>
                        <div className={`w-10 h-10 ${team.color} rounded-lg flex items-center justify-center text-white font-black uppercase`}>{team.name.charAt(0)}</div>
                        <div className="flex-grow"><p className="text-xs font-black text-gray-800 uppercase tracking-tighter leading-none mb-1">{team.name}</p><p className="text-[9px] text-gray-400 font-bold">{team.sub}</p></div>
                    </div>
                ))}
            </div>
        </aside>

        <main className="flex-grow bg-[#f5f5f5] flex flex-col overflow-hidden">
            <header className="h-12 bg-white border-b border-gray-200 px-4 md:px-8 flex justify-between items-center shadow-sm shrink-0">
                <h2 className="font-black text-xs text-gray-800 uppercase italic"># {activeTeamsSidebar === 'teams' ? selectedTeam.name : activeTeamsSidebar}</h2>
                <div className="flex gap-4 md:gap-8 text-[10px] font-black uppercase text-gray-400 overflow-x-auto">
                    {['posts', 'files', 'assignments'].map(tab => (<span key={tab} onClick={() => setActiveTeamsContent(tab)} className={`cursor-pointer transition-all pb-4 border-b-2 whitespace-nowrap ${activeTeamsContent === tab ? 'text-[#464775] border-[#464775]' : 'hover:text-gray-600 border-transparent'}`}>{tab}</span>))}
                </div>
            </header>
            <div className="flex-grow overflow-y-auto p-4 md:p-10 max-w-5xl mx-auto w-full space-y-8">
                {activeTeamsContent === 'posts' && (
                    <div className="space-y-6 animate-fade-in">
                        {teamsPosts.map(post => (
                            <div key={post.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex gap-4">
                                <div className="w-10 h-10 bg-[#464775] rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0">{post.user.charAt(0)}</div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold text-gray-800 text-sm">{post.user}</span>
                                        <span className="text-[10px] text-gray-400 uppercase font-black">{post.role}</span>
                                        <span className="text-[10px] text-gray-300">• {post.time}</span>
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">{post.text}</p>
                                    <div className="pt-2 flex items-center gap-4 text-gray-400">
                                        <button className="flex items-center gap-1 hover:text-[#464775] transition-colors"><MessageSquare size={14} /><span className="text-[10px] font-bold">Reply</span></button>
                                        <span className="text-[10px] font-bold italic">{post.likes} Reactions</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTeamsContent === 'assignments' && (
                    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden animate-fade-in">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 border-b border-gray-100">
                                <tr>
                                    <th className="px-6 py-4 text-[10px] font-black uppercase text-gray-400">{isEn ? "Assignment" : "Tarea"}</th>
                                    <th className="px-6 py-4 text-[10px] font-black uppercase text-gray-400">{isEn ? "Due Date" : "Fecha"}</th>
                                    <th className="px-6 py-4 text-[10px] font-black uppercase text-gray-400">{isEn ? "Status" : "Estado"}</th>
                                    <th className="px-6 py-4 text-[10px] font-black uppercase text-gray-400">{isEn ? "Points" : "Puntos"}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {teamsAssignments.map(as => (
                                    <tr key={as.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-bold text-gray-700 text-sm">{as.title}</td>
                                        <td className="px-6 py-4 text-xs text-gray-500">{as.due}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded text-[8px] font-black uppercase tracking-widest ${as.status === 'Assigned' ? 'bg-blue-50 text-blue-600' : as.status === 'Pending' ? 'bg-[#8B0000]/5 text-[#8B0000]' : 'bg-gray-100 text-gray-400'}`}>
                                                {as.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-xs font-mono text-gray-400">{as.points}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {activeTeamsContent === 'files' && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in">
                        {['Class Materials', 'Student Handbook', 'Term Syllabus', 'Templates'].map((f, i) => (
                            <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer group text-center space-y-3">
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mx-auto group-hover:bg-[#464775] group-hover:text-white transition-colors">
                                    <FileText size={24} />
                                </div>
                                <p className="text-[10px] font-black uppercase text-gray-700">{f}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;ashboard;