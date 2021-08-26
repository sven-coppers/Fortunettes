<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Fortunettes</title>

    <!-- General Styling -->
    <link type="text/css" rel="stylesheet" href="<?php echo $root; ?>framework/style/reset.css">
    <link type="text/css" rel="stylesheet" href="<?php echo $root; ?>framework/style/frame.css">
    <link type="text/css" rel="stylesheet" href="<?php echo $root; ?>framework/style/general.css">
    <link type="text/css" rel="stylesheet" href="<?php echo $root; ?>lib/jquery.tooltip.css">
    <link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/vis/4.21.0/vis.min.css">

<?php foreach($lookAndFeels as $lookAndFeel) {
    echo '    <!-- ' . $lookAndFeel . ' -->' . "\n";
    echo '    <link type="text/css" rel="stylesheet" href="' . $root . 'look_and_feels/' . $lookAndFeel . '/' . $lookAndFeel . '_button.css">' . "\n";
    echo '    <link type="text/css" rel="stylesheet" href="' . $root . 'look_and_feels/' . $lookAndFeel . '/' . $lookAndFeel . '_checkbox.css">' . "\n";
    echo '    <link type="text/css" rel="stylesheet" href="' . $root . 'look_and_feels/' . $lookAndFeel . '/' . $lookAndFeel . '_radio_button.css">' . "\n";
    echo '    <link type="text/css" rel="stylesheet" href="' . $root . 'look_and_feels/' . $lookAndFeel . '/' . $lookAndFeel . '_textbox.css">' . "\n";
    echo '    <link type="text/css" rel="stylesheet" href="' . $root . 'look_and_feels/' . $lookAndFeel . '/' . $lookAndFeel . '_selection_hybrid.css">' . "\n";
    echo '    <link type="text/css" rel="stylesheet" href="' . $root . 'look_and_feels/' . $lookAndFeel . '/' . $lookAndFeel . '_slider.css">' . "\n";
    echo '    <link type="text/css" rel="stylesheet" href="' . $root . 'look_and_feels/' . $lookAndFeel . '/' . $lookAndFeel . '_panel.css">' . "\n";
    echo '    <link type="text/css" rel="stylesheet" href="' . $root . 'look_and_feels/' . $lookAndFeel . '/' . $lookAndFeel . '_tab.css">' . "\n";
    echo '    <link type="text/css" rel="stylesheet" href="' . $root . 'look_and_feels/' . $lookAndFeel . '/' . $lookAndFeel . '_listbox.css">' . "\n\n";
    echo '    <link type="text/css" rel="stylesheet" href="' . $root . 'look_and_feels/' . $lookAndFeel . '/' . $lookAndFeel . '_label.css">' . "\n\n";
    echo '    <link type="text/css" rel="stylesheet" href="' . $root . 'look_and_feels/' . $lookAndFeel . '/' . $lookAndFeel . '_limbo.css">' . "\n\n";
    echo '    <link type="text/css" rel="stylesheet" href="' . $root . 'look_and_feels/' . $lookAndFeel . '/' . $lookAndFeel . '_widget.css">' . "\n\n";
} ?>
    <!-- Use Case Styling -->
<?php foreach($cases as $case) {
    if(file_exists($root . 'cases/' . $case . '/style.css')) {
        echo '    <link type="text/css" rel="stylesheet" href="' . $root . 'cases/' . $case . '/style.css">' . "\n";
    }
} ?>
</head>
<body>
<?php
    if(count($lookAndFeels) > 1) {
?>
    <div class="header" id="header">
        <div class="header_content">
            <h1>Fortunettes</h1>
            <p>An enhanced set of widgets that are capable of visualizing their future state, which helps users to understand what will happen without committing to an action.  In our evaluation, we found that users require less clicks to achieve tasks and are more confident about their actions when feedforward information was available. These findings suggest that widget-level feedforward is highly suitable in applications the user is unfamiliar with, or when high confidence is desirable.</p>
            <p class="contact">
                <a href="mailto:sven.coppers@uhasselt.be">Sven Coppers</a><sup>1,2</sup>,
                <a href="mailto:kris.luyten@uhasselt.be">Kris Luyten</a><sup>1,2</sup>,
                <a href="mailto:davy.vanacken@uhasselt.be">Davy Vanacken</a><sup>1,2</sup>,
                <a href="mailto:navarre@irit.fr">David Navarre</a><sup>3</sup>,
                <a href="mailto:palanque@irit.fr">Philippe Palanque</a><sup>3,4</sup>,
                <a href="mailto:christine.gris@airbus.com">Christine Gris</a><sup>5</sup>
            </p>
            <p class="contact">
                Publications:
                <a href="https://dl.acm.org/doi/10.1145/3331162"><img class="icon" src="test/img/pdf.png" /> EICS '19</a>,
                <a href="http://researcharchive.wintec.ac.nz/7211/1/FMIS%202019%20informal%20v2.pdf#page=57"><img class="icon" src="test/img/pdf.png" /> FMIS '19</a>,
                <a href="https://academic.oup.com/iwc/advance-article/doi/10.1093/iwcomp/iwab014/6277976?guestAccessKey=4e5c3198-1311-4524-840f-022107f47385"><img class="icon" src="test/img/pdf.png" /> IwC '21</a>
            </p>
            <div class="logos">
                <sup>1</sup><a href="https://www.uhasselt.be/edm"><img class="logo" src="test/img/uhasselt-edm.png" /></a>
                <sup>2</sup><a href="https://www.uhasselt.be/edm"><img class="logo" src="test/img/fm.png" /></a>
                <sup>3</sup><a href="https://www.uhasselt.be/edm"><img class="logo" src="test/img/toulouse.png" /></a>
                <sup>4</sup><a href="https://www.uhasselt.be/edm"><img class="logo" src="test/img/tue.jpg" /></a>
                <sup>5</sup><a href="https://www.uhasselt.be/edm"><img class="logo" src="test/img/airbus.png" /></a>
            </div>
        </div>
        <div class="column_names">
            <div class="column_name"><h2>Standard Widgets</h2></div>
            <div class="column_name"><h2>Fortunettes</h2></div>
            <div class="column_name"><h2>Fortunettes 2.0</h2></div>
        </div>
    </div>
<?php
    }
?>



<div class="use_cases">
<?php foreach($cases as $case) {
    include($root . 'cases/' . $case . '/index.html');
    echo "\n";
} ?>
</div>
</body>
<!-- Libraries -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/4.2.2/d3.min.js"></script>
<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/vis/4.21.0/vis.min.js"></script> -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/vis/4.21.0/vis.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="<?php echo $root; ?>lib/easytimer.min.js"></script>
<script src="<?php echo $root; ?>lib/jquery.tooltip.js"></script>
<script src="<?php echo $root; ?>demo_page.js"></script>

<!-- Helpers -->
<script src="<?php echo $root; ?>framework/helpers/array.js"></script>
<script src="<?php echo $root; ?>framework/helpers/string.js"></script>
<script src="<?php echo $root; ?>framework/helpers/logger.js"></script>
<script src="<?php echo $root; ?>framework/helpers/time.js"></script>
<script src="<?php echo $root; ?>framework/globals.js"></script>

<!-- Models -->
<script src="<?php echo $root; ?>framework/widgets/widget_state.js"></script>
<script src="<?php echo $root; ?>framework/widgets/selectable_widget_state.js"></script>
<script src="<?php echo $root; ?>framework/widgets/button_state.js"></script>
<script src="<?php echo $root; ?>framework/widgets/radio_button_state.js"></script>
<script src="<?php echo $root; ?>framework/widgets/radio_group_state.js"></script>
<script src="<?php echo $root; ?>framework/widgets/checkbox_state.js"></script>
<script src="<?php echo $root; ?>framework/widgets/checkbox_group_state.js"></script>
<script src="<?php echo $root; ?>framework/widgets/textbox_state.js"></script>
<script src="<?php echo $root; ?>framework/widgets/selection_hybrid_state.js"></script>
<script src="<?php echo $root; ?>framework/widgets/slider_state.js"></script>
<script src="<?php echo $root; ?>framework/widgets/listbox_state.js"></script>
<script src="<?php echo $root; ?>framework/widgets/panel_state.js"></script>
<script src="<?php echo $root; ?>framework/widgets/tab_state.js"></script>
<script src="<?php echo $root; ?>framework/widgets/label_state.js"></script>
<script src="<?php echo $root; ?>framework/widgets/tab_group_state.js"></script>

<script src="<?php echo $root; ?>framework/model/state_machine.js"></script>
<script src="<?php echo $root; ?>framework/model/state_machine_reader.js"></script>
<script src="<?php echo $root; ?>framework/model/application_state.js"></script>
<script src="<?php echo $root; ?>framework/model/transition.js"></script>
<script src="<?php echo $root; ?>framework/model/gui_event.js"></script>
<script src="<?php echo $root; ?>framework/model/listbox_event.js"></script>
<script src="<?php echo $root; ?>framework/model/history_stack.js"></script>

<!-- Framework -->
<script src="<?php echo $root; ?>framework/controller.js"></script>
<script src="<?php echo $root; ?>framework/look_and_feel.js"></script>
<script src="<?php echo $root; ?>framework/widget_factory.js"></script>
<script src="<?php echo $root; ?>framework/main_window.js"></script>
<script src="<?php echo $root; ?>framework/main_window_state.js"></script>

<!-- Generic Widgets -->
<script src="<?php echo $root; ?>framework/widgets/widget.js"></script>
<script src="<?php echo $root; ?>framework/widgets/selectable_widget.js"></script>
<script src="<?php echo $root; ?>framework/widgets/panel.js"></script>
<script src="<?php echo $root; ?>framework/widgets/button.js"></script>
<script src="<?php echo $root; ?>framework/widgets/radio_button.js"></script>
<script src="<?php echo $root; ?>framework/widgets/radio_group.js"></script>
<script src="<?php echo $root; ?>framework/widgets/checkbox.js"></script>
<script src="<?php echo $root; ?>framework/widgets/checkbox_group.js"></script>
<script src="<?php echo $root; ?>framework/widgets/textbox.js"></script>
<script src="<?php echo $root; ?>framework/widgets/listbox.js"></script>
<script src="<?php echo $root; ?>framework/widgets/selection_hybrid.js"></script>
<script src="<?php echo $root; ?>framework/widgets/slider.js"></script>
<script src="<?php echo $root; ?>framework/widgets/tab.js"></script>
<script src="<?php echo $root; ?>framework/widgets/tab_group.js"></script>
<script src="<?php echo $root; ?>framework/widgets/label.js"></script>

<?php foreach($lookAndFeels as $lookAndFeel) {
    echo '<!-- ' . $lookAndFeel . ' -->' . "\n";
    echo '<script src="' . $root . 'look_and_feels/' . $lookAndFeel . '/' . $lookAndFeel . '_look_and_feel.js"></script>' . "\n";
    echo '<script src="' . $root . 'look_and_feels/' . $lookAndFeel . '/' . $lookAndFeel . '_panel.js"></script>' . "\n";
    echo '<script src="' . $root . 'look_and_feels/' . $lookAndFeel . '/' . $lookAndFeel . '_button.js"></script>' . "\n";
    echo '<script src="' . $root . 'look_and_feels/' . $lookAndFeel . '/' . $lookAndFeel . '_checkbox.js"></script>' . "\n";
    echo '<script src="' . $root . 'look_and_feels/' . $lookAndFeel . '/' . $lookAndFeel . '_checkbox_group.js"></script>' . "\n";
    echo '<script src="' . $root . 'look_and_feels/' . $lookAndFeel . '/' . $lookAndFeel . '_radio_button.js"></script>' . "\n";
    echo '<script src="' . $root . 'look_and_feels/' . $lookAndFeel . '/' . $lookAndFeel . '_radio_group.js"></script>' . "\n";
    echo '<script src="' . $root . 'look_and_feels/' . $lookAndFeel . '/' . $lookAndFeel . '_selection_hybrid.js"></script>' . "\n";
    echo '<script src="' . $root . 'look_and_feels/' . $lookAndFeel . '/' . $lookAndFeel . '_slider.js"></script>' . "\n";
    echo '<script src="' . $root . 'look_and_feels/' . $lookAndFeel . '/' . $lookAndFeel . '_tab.js"></script>' . "\n";
    echo '<script src="' . $root . 'look_and_feels/' . $lookAndFeel . '/' . $lookAndFeel . '_tab_group.js"></script>' . "\n";
    echo '<script src="' . $root . 'look_and_feels/' . $lookAndFeel . '/' . $lookAndFeel . '_textbox.js"></script>' . "\n";
    echo '<script src="' . $root . 'look_and_feels/' . $lookAndFeel . '/' . $lookAndFeel . '_listbox.js"></script>' . "\n";
    echo '<script src="' . $root . 'look_and_feels/' . $lookAndFeel . '/' . $lookAndFeel . '_label.js"></script>' . "\n\n";
} ?>
<!-- Controllers -->
<?php
    foreach($cases as $case) {
        echo '<script src="' . $root . 'cases/' . $case . '/controller.js"></script>' . "\n";

        if(file_exists($root . 'cases/' . $case . '/js/')) {
            $iterator = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($root . 'cases/' . $case . '/js/'));

            foreach($iterator as $file) {
                if ($file->isDir()) continue;

                if(strpos($file->getFilename(), '.js') !== false && strpos($file->getFilename(), '.map') == false) {
                    echo '<script src="' . $root . $file->getPathname() . '"></script>' . "\n";
                }
            }
        }
    }
?>

<script>
    var root = '<?php echo $root; ?>';
    var logger = new Logger();
<?php
    foreach($lookAndFeels as $lookAndFeel) {
        echo "    lookAndFeels.push('$lookAndFeel');\n";
    }

    foreach($modes as $mode) {
        echo "    lookAndFeelModes.push('$mode');\n";
    }
?>
</script>
</html>