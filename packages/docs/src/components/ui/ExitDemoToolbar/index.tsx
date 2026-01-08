import styles from "./styles.module.css";

export default function ExitDemoToolbar() {
    return (
        <div className={styles.toolbar}>
            You are viewing a demo page. <a href="/">Head back now</a>
        </div>
    )
}