<?php
    if(strcmp($type, "briefing") == 0) {
        $title = "Briefing";
    } else if(strcmp($type, "training") == 0) {
        $title = "Training";
    } else {
        $title = "Instructions";
    }
?>

<div class="progress" style="width: <?php echo $progress; ?>%;"><p><?php echo $current . " / " . $totalNumTasks; ?></p></div>
<div class="instructions">
    <h1><?php echo $title; ?> </h1>
    <?php echo $task["instruction"]; ?>
</div>