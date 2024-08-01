"use client"

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { SET_NAME } from '@/lib/features/profile/profileSlice';
import styles from './page.module.css';

export default function Dashboard() {
  const dispatch = useAppDispatch();
  const name = useAppSelector(state => state.profile.name);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(SET_NAME(event.target.value));
  };

  return (
    <main className={styles.dashboard}>
      <div className={styles.title}>Dashboard</div>
      <div className={styles.subtitle}>{`Hi ${name || 'User'}`}</div>
      <div>
        <input
          name="name"
          placeholder="Enter Name"
          onChange={handleInputChange}
        />
      </div>
    </main>
  );
}
