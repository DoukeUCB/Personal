import type { IconName } from '../components/Icon'

type KpiItem = {
  title: string
  value: string
  icon: IconName
}

type ReportItem = {
  title: string
  subtitle: string
  icon: IconName
  details: string[]
  updated: string
}

export const kpiData: KpiItem[] = [
  { title: 'Estudiantes activos', value: '12,480', icon: 'student' },
  { title: 'Docentes', value: '640', icon: 'teacher' },
  { title: 'Carreras', value: '24', icon: 'reports' },
  { title: 'Aulas disponibles', value: '118', icon: 'calendar' },
]

export const studentsSeed = [
  { name: 'Mariana Vargas', role: 'Estudiante', status: 'Activo' },
  { name: 'Luis Quispe', role: 'Estudiante', status: 'Activo' },
  { name: 'Sofía Rojas', role: 'Estudiante', status: 'Inactivo' },
]

export const teachersData = [
  { name: 'Carlos Mendez', role: 'Docente', status: 'Activo' },
  { name: 'Patricia Salas', role: 'Docente', status: 'Activo' },
]

export const adminsData = [
  { name: 'Ana Rojas', role: 'Administrativo', status: 'Activo' },
  { name: 'Miguel Soto', role: 'Administrativo', status: 'Activo' },
]

export const reportsData: ReportItem[] = [
  {
    title: 'Matrículas por semestre',
    subtitle: 'Comparativo 2024-2026',
    icon: 'chart',
    details: ['Crecimiento del 8% en 2026', 'Mayor demanda en Ingeniería', 'Retención estudiantil 92%'],
    updated: 'Actualizado hoy',
  },
  {
    title: 'Asistencia docente',
    subtitle: 'Resumen mensual',
    icon: 'reports',
    details: ['Promedio de asistencia 96%', 'Alertas en 3 asignaturas', 'Cumplimiento por facultad'],
    updated: 'Actualizado hace 2 días',
  },
  {
    title: 'Uso de aulas',
    subtitle: 'Ocupación por bloque horario',
    icon: 'calendar',
    details: ['Ocupación media 78%', 'Mayor demanda 08:00 - 10:00', 'Disponibilidad alta en tardes'],
    updated: 'Actualizado hace 1 día',
  },
]

export const settingsData = [
  { label: 'Notificaciones institucionales', value: 'Activadas' },
  { label: 'Respaldo automático', value: 'Diario - 02:00 AM' },
  { label: 'Idioma del sistema', value: 'Español' },
]

export const eventsData = [
  {
    title: 'Semana de innovación académica',
    date: '12 Mayo 2026',
    location: 'Auditorio principal',
    status: 'Confirmado',
  },
  {
    title: 'Capacitación docente en IA',
    date: '20 Mayo 2026',
    location: 'Laboratorio 3',
    status: 'En planificación',
  },
  {
    title: 'Feria de proyectos estudiantiles',
    date: '30 Mayo 2026',
    location: 'Patio central',
    status: 'Confirmado',
  },
]
