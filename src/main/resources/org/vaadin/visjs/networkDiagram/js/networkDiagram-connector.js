/**
 * Created by roshans on 10/10/14.
 */

window.org_vaadin_visjs_networkDiagram_NetworkDiagram = function () {

    var nodes = null;
    var edges = null;
    var graph = null;
    var options = {"clickToUse": "false"};
    var container = null;
    var self = this;

    this.onStateChange = function () {
        if (graph != null) {
            graph.redraw();
        }
    };

    this.init = function (o) {
        options = JSON.parse(o);
        nodes = new vis.DataSet();
        edges = new vis.DataSet();
        container = this.getElement();
        graph = new vis.Network(container, {nodes: nodes, edges: edges}, options);

        graph.on('select', function (properties) {
            self.onSelect(properties);
        });
        graph.on('click', function (properties) {
            self.onClick(properties);
        });
        graph.on('doubleClick', function (properties) {
            self.onDoubleClick(properties);
        });
        graph.on('hoverNode', function (properties) {
            self.onHoverNode(properties);
        });
        graph.on("blurNode", function (properties) {
            self.onBlurNode(properties);
        });
        graph.on('resize', function (properties) {
            self.onResize(properties);
        });
        graph.on('dragStart', function (properties) {
            self.onDragStart(properties);
        });
        graph.on('dragEnd', function (properties) {
            self.onDragEnd(properties);
        });
        graph.on('startStabilization', function (properties) {
            self.onStartStabilization(properties);
        });
        graph.on('stabilized', function (properties) {
            self.onStabilized(properties);
        });
        graph.on('viewChanged', function (properties) {
            self.onViewChanged(properties);
        });
        graph.on('zoom', function (properties) {
            self.onZoom(properties);
        });
    };

    this.updateOptions = function (o) {
        options = JSON.parse(o);
        if (graph != null) {
            graph.redraw();
        }
    };

    this.addNodes = function (n) {
        if (nodes != null) {
            nodes.add(JSON.parse(n));
        }
    };

    this.addEdges = function (e) {
        if (edges != null) {
            edges.add(JSON.parse(e));
        }
    };

    this.drawConnections = function () {
        if (graph != null) {
            graph.redraw();
        }
    };

    this.removeNode = function (n) {
        if (nodes != null) {
            nodes.remove(JSON.parse(n));
        }
    };

    this.removeEdge = function (e) {
        if (edges != null) {
            edges.remove(JSON.parse(e));
        }
    };

    this.updateNode = function (n) {
        if (nodes != null) {
            nodes.update(JSON.parse(n));
        }
    };

    this.updateEdge = function (e) {
        if (edges != null) {
            edges.update(JSON.parse(e));
        }
    };

    this.clearNodes = function () {
        if (nodes != null) {
            nodes.clear();
        }
    };

    this.clearEdges = function () {
        if (edges != null) {
            edges.clear();
        }
    };

    this.destroyNetwork = function () {
        if (graph != null) {
            graph.destroyNetwork();
        }
    };
};
